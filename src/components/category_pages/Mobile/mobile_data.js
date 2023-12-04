import Nord_N30 from './images/one plus.jpg'
import Nord_7 from './images/one plus1.jpg'
import Nord_3 from './images/one plus2.jpg'
import iQOO_Z7s_5G from './images/iQOO Z7s 5G.jpg'
import iQOO_Neo_7_Pro_5G from './images/iQOO Neo 7 Pro 5G.jpg'
import Apple_iPhone_14 from './images/Apple_iPhone_14.jpg'
import Apple_iPhone_14_Plus from './images/Apple_iPhone_14_Plus.jpg'
import Apple_iPhone_14_Pro from './images/Apple_iPhone_14_Pro.jpg'
import Realme_9 from './images/Realme_9.jpg'
import realme_11_Pro_5G from './images/realme 11 Pro+ 5G.jpg'

const mobiles= [
    {
        id:21,
        model: "Nord N30 5G",
        brand:"One-Plus",
        price:25000,
        specification:{
            storage:"256 GB",
            ram: "12 GB",
            camera:{
                rear:'200MP',
                front:'12MP'           
        }
        },
        image:Nord_N30
    },

    {
        id:22,
        model: "Nord 7 5G",
        brand:"One-Plus",
        price:25000,
        specification:{
            storage:"128 GB",
            ram: "8 GB",
            camera:{
                rear:'120MP',
                front:'12MP'           
        }
        },
        image:Nord_7
    },
    
    {
        id:23,
        model: "Nord 3 5G",
        brand:"One-Plus",
        price:10000,
        specification:{
            storage:"64 GB",
            ram: "4 GB",
            camera:{
                rear:'60MP',
                front:'8MP'           
        }
        },
        image:Nord_3
    },

    {
        id:24,
        model: "iQOO Z7s 5G",
        brand:"iQOO",
        price:16999,
        specification:{
            storage:"128 GB",
            ram: "6 GB",
            camera:{
                rear:'64MP',
                front:'8MP'           
        }
        },
        image:iQOO_Z7s_5G
    },

    {
        id:25,
        model: "iQOO Neo 7 Pro 5G",
        brand:"iQOO",
        price:32999,
        specification:{
            storage:"128 GB",
            ram: "8 GB",
            camera:{
                rear:'50MP',
                front:'12MP'           
        }
        },
        image:iQOO_Neo_7_Pro_5G
    },

    {
        id:26,
        model: "Apple iPhone 14 5G",
        brand:"Apple",
        price:61000,
        specification:{
            storage:"128 GB",
            ram: "6 GB",
            camera:{
                rear:'12MP TrueDepth camera',
                front:'8MP'           
        }
        },
        image:Apple_iPhone_14
    },

    {
        id:27,
        model: "Apple iPhone 14 Plus",
        brand:"Apple",
        price:71000,
        specification:{
            storage:"128 GB",
            ram: "8 GB",
            camera:{
                rear:'12MP TrueDepth camera',
                front:'8MP'           
        }
        },
        image:Apple_iPhone_14_Plus
    },

    {
        id:28,
        model: "Apple iPhone 14 Pro",
        brand:"Apple",
        price:139900,
        specification:{
            storage:"256 GB",
            ram: "6 GB",
            camera:{
                rear:'12MP TrueDepth camera',
                front:'8MP'           
        }
        },
        image:Apple_iPhone_14_Pro
    },

    {
        id:29,
        model: "Realme narzo N53",
        brand:"Realme",
        price:17499,
        specification:{
            storage:"128 GB",
            ram: "8 GB",
            camera:{
                rear:'10MP+ 8MP + 2MP',
                front:'16MP'           
        }
        },
        image:Realme_9
    },

    {
        id:30,
        model: "Realme 11 Pro+ 5G",
        brand:"Realme",
        price:29390,
        specification:{
            storage:"256GB",
            ram: "12GB",
            camera:{
                rear:'200MP',
                front:'32MP'           
        }
        },
        image:realme_11_Pro_5G
    }
]
export default mobiles;