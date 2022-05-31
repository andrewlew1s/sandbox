const imageTargetPortalComponent = () => ({
  schema: {
    name: {type: 'string'},
  },
  init() {
    const {object3D} = this.el
    const {name} = this.data
    object3D.visible = false
    // selects the portal
    const portal = this.el.sceneEl.querySelector('#portal')
    // selects the turtle
    const turtle = this.el.sceneEl.querySelector('#turtle')
    const showImage = ({detail}) => {
      if (name !== detail.name) {
        return
      }
      object3D.position.copy(detail.position)
      object3D.quaternion.copy(detail.rotation)
      object3D.scale.set(detail.scale, detail.scale, detail.scale)
      object3D.visible = true
    }
    const imageFound = (e) => {
      showImage(e)
      // portal animation
      setTimeout(() => {
        portal.setAttribute('animation__scaleIn', {
          property: 'radius-inner',
          dur: 1500,
          from: '0.001',
          to: '0.375',
          easing: 'easeOutElastic',
        })
      }, 200)
      // turtle animation
      setTimeout(() => {
        turtle.setAttribute('animation__moveOut', {
          property: 'position',
          dur: 3000,
          from: '0 0 -10',
          to: '0 0 0.1',
          easing: 'easeOutQuad',
        })
      }, 1000)
    }
    const imageLost = (e) => {
      object3D.visible = false
    }
    this.el.sceneEl.addEventListener('xrimagefound', imageFound)
    this.el.sceneEl.addEventListener('xrimageupdated', showImage)
    this.el.sceneEl.addEventListener('xrimagelost', imageLost)
  },
})

AFRAME.registerComponent('image-target-portal', imageTargetPortalComponent())

export {imageTargetPortalComponent}