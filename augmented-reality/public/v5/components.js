const floatingTurtleSpawnComponent = {
  init() {
    const { object3D } = this.el
    let found = false
    const createObjects = ({ detail }) => {
      console.log('createObjects')
      if (!found) {
        const absPos = new THREE.Vector3().copy(
          detail.position
        )
        setTimeout(() => {
          const floatingTurtle1 = document.createElement('a-entity')
          floatingTurtle1.setAttribute('visible', 'false')
          floatingTurtle1.setAttribute('gltf-model', require('./assets/models/scene.gltf'))
          floatingTurtle1.setAttribute('shadow', { receive: false })
          floatingTurtle1.setAttribute('scale', '0.01 0.01 0.01')
          floatingTurtle1.object3D.position.set(absPos.x + 0.1, 0, absPos.z + 0.8)
          this.el.sceneEl.appendChild(floatingTurtle1)
          floatingTurtle1.addEventListener('model-loaded', () => {
            // Once the model is loaded, we are ready to show it popping in using an animation
            floatingTurtle1.setAttribute('visible', 'true')
            floatingTurtle1.setAttribute('animation', {
              property: 'scale',
              to: '0.2 0.2 0.2',
              easing: 'easeOutElastic',
              dur: 1200,
            })
          })
          const floatingTurtle2 = document.createElement('a-entity')
          floatingTurtle2.setAttribute('visible', 'false')
          floatingTurtle2.setAttribute('gltf-model', require('./assets/models/scene.gltf'))
          floatingTurtle2.setAttribute('shadow', { receive: false })
          floatingTurtle2.setAttribute('scale', '0.01 0.01 0.01')
          floatingTurtle2.object3D.position.set(absPos.x - 0.2, 0, absPos.z + 0.5)
          this.el.sceneEl.appendChild(floatingTurtle2)
          floatingTurtle2.addEventListener('model-loaded', () => {
            floatingTurtle2.setAttribute('visible', 'true')
            floatingTurtle2.setAttribute('animation', {
              property: 'scale',
              to: '0.22 0.22 0.22',
              easing: 'easeOutElastic',
              dur: 800,
            })
          })
          const floatingTurtle3 = document.createElement('a-entity')
          floatingTurtle3.setAttribute('visible', 'false')
          floatingTurtle3.setAttribute('gltf-model', require('./assets/models/scene.gltf'))
          floatingTurtle3.setAttribute('shadow', { receive: false })
          floatingTurtle3.setAttribute('scale', '0.01 0.01 0.01')
          floatingTurtle3.object3D.position.set(absPos.x + 0.4, 0, absPos.z + 0.5)
          this.el.sceneEl.appendChild(floatingTurtle3)
          floatingTurtle3.addEventListener('model-loaded', () => {
            floatingTurtle3.setAttribute('visible', 'true')
            floatingTurtle3.setAttribute('animation', {
              property: 'scale',
              to: '0.25 0.25 0.25',
              easing: 'easeOutElastic',
              dur: 1000,
            })
          })
        }, 1000)
        found = true
      }
    }
    this.el.sceneEl.addEventListener('xrimagefound', createObjects)
  },
}

export { floatingTurtleSpawnComponent }
