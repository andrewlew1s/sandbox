// Copyright (c) 2021 8th Wall, Inc.
/* globals AFRAME */

const OBJECT_SIZE = 0.1
const THROW_SPEED = 100

AFRAME.registerComponent('shoot-shuttle', {
	init() {
	  const camera = document.getElementById('camera')
	  const laserSnd = document.querySelector('#laser').components.sound

	  this.el.sceneEl.addEventListener('touchstart', (event) => {
		console.log(`Throwing object sized ${OBJECT_SIZE} with speed ${THROW_SPEED}`)

		// Create element to be thrown, setting position, scale, and model
		const shuttle = document.createElement('a-entity')
		shuttle.setAttribute('position', camera.object3D.position)
		shuttle.setAttribute('scale', `${OBJECT_SIZE} ${OBJECT_SIZE} ${OBJECT_SIZE}`)
		shuttle.setAttribute('gltf-model', '#shuttleModel')

		// Choose a random rotation offset for some variation
		// const randomRotation = {x: -90 + Math.random() * 30, y: Math.random() * 360, z: 0}
		// shuttle.setAttribute('rotation', randomRotation)
		shuttle.setAttribute('rotation', '0 0 0')

		// Set velocity, rotated with camera direction
		const velocity = new THREE.Vector3(0, 0, -THROW_SPEED)
		velocity.applyQuaternion(camera.object3D.quaternion)
		shuttle.setAttribute('velocity', velocity)

		// Add physics body
		shuttle.setAttribute('body', {
		  type: 'dynamic',
		  sphereRadius: OBJECT_SIZE / 2,
		  shape: 'sphere',
		})

		shuttle.setAttribute('shadow', {
		  receive: false,
		})

		// Add shuttle to scene
		this.el.sceneEl.appendChild(shuttle)

		// The laser is created at the same time as the thrown shuttle so
		// there is time to load the model before it hits the ground
		const laserBase = document.createElement('a-entity')
		splatBase.setAttribute('visible', 'false')

		// The splat consists of a model wrapped in an empty
		// parent so we can apply the correct scaling animation
		const laser = document.createElement('a-entity')
		laser.setAttribute('gltf-model', '#shuttleModel')
		laser.setAttribute('scale', '1 1 1')
		laserBase.appendChild(laser)

		this.el.sceneEl.appendChild(laserBase)

		let didCollide = false
		shuttle.addEventListener('collide', (e) => {
		  // Only want to do the laser once, and with the ground only
		  if (didCollide || e.detail.body.el.id !== 'ground') {
			return
		  }
		  didCollide = true

		  // Stop previous laser sound
		  laserSnd.stopSound()
		  // Play laser sound
		  laserSnd.playSound()

		  // Copy positioning of thrown shuttle to laser
		  laserBase.object3D.position.copy(shuttle.object3D.position)
		  laser.object3D.rotation.copy(shuttle.object3D.rotation)

		  laserBase.object3D.visible = true

		  shuttle.setAttribute('visible', 'false')

		  // We can't remove the thrown shuttle until the physics step is over
		  setTimeout(() => {
			shuttle.parentNode.removeChild(shuttle)
		  }, 0)

		  // Using animation component to show flattening
		  laserBase.setAttribute('animation__scale', {
			property: 'scale',
			from: '1 1 1',
			to: '3 0.1 3',
			dur: 500,
			easing: 'easeOutQuad',
		  })

		  // After 2.5 seconds, shrink the laser away and delete it
		  setTimeout(() => {
			laserBase.setAttribute('animation__scale', {
			  property: 'scale',
			  from: '3 0.1 3',
			  to: '0.001 0.001 0.001',
			  dur: 1500,
			  easing: 'easeInQuad',
			})
			setTimeout(() => laserBase.parentNode.removeChild(laserBase), 1500)
		  }, 2500)
		})
	  })
	},
  })