const app = Vue.createApp({
    data() {
        return{
            product: 'Play Station 5',
            cart: 0,
            selectedColor: 'white',
            //These are the direction to the images
            images: {
                white: 'images/PS5-white.webp',
                blue: 'images/PS5-blue.webp',
                yellow: 'images/PS5-yellow.webp'
              },
            stock: {
                white: 78,
                blue: 33,
                yellow: 0
            },
            details: {
                cpu: ['AMD Ryzen Zen 2', '8 Cores/16 Threads' , 'Variable frequency, up to 3.5GHz'],
                gpu: ['AMD Radeon RDNA', '2-based graphics engine', '10.28 Teraflops, 36 CUs @ 2.23GHz', 'Ray Tracing Acceleration'],
                ram: ['16GB GDDR6/256-bit', '448GB/s Bandwidth'],
                storage: ['Custom 825GB SSD', '5.5GB/s Read Bandwidth (Raw)', 'Typical 8-9GB/s (Compressed)'],
                video: ['Support of 4K 120Hz TVs', '8K TVs VVR (specified by HDMI version 2.1)'],
                audio: ['"Tempest" 3D AudioTech']
            }              
        }
    },
    methods: {
        //this function changes image depending on selected color
        selectedImage(){
            return this.images[this.selectedColor]
        },
        //This function will check to display if the item is in stock
        inStock(){
            return this.stock[this.selectedColor] > 0
        },
        //this will add an item to the cart
        addToCart(){
            //if statement to not add out of stock items
            if(this.inStock()){this.cart += 1}
        }
    },
    computed: {
        title(){
            /*
             when I use this.selectedColor in the return statement gives error
             so I did it like this
             */
            color = this.selectedColor
            console.log(color)
            return this.product + ' ' + color
        }
    }

})