import EventEmmiter from './EventEmitter.js'

export default class Sizes extends EventEmmiter
{
    constructor()
    {
        // to override constructor 
        super()

        // sizes 
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelratio = Math.min(window.devicePixelRatio, 2)

        // resize
        window.addEventListener('resize', () => 
        {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelratio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
        })
    }
}