import ThinkPad from './image/ThinkPad E15 Gen 4.jpg'
import IdeaPad from './image/IdeaPad Slim 3i 11th Gen.jpg'
import Yoga from './image/Yoga-6-Gen.jpg'
import ThinkBook from './image/ThinkBook 15 Gen 5.jpg'
import Legion from './image/Legion-5-AMD-9.jpg'
import LOQ from './image/Lenovo LOQ 13th Gen.jpg'
import V15 from './image/Lenovo V15 Gen 3.jpg'
import Vostro from './image/Vostro 3520.jpg'
import Inspiron from './image/Inspiron-16-Plus.jpg'
const laptops = [
    {
        id: 41, model: "ThinkPad E15 Gen 4 (15, Intel)", brand: "Lenovo", price: 48490,
        specification: {
            processor: "12th Generation Intel® Core™ i5- 1235U Processor(E- cores up to 3.30 GHz P - cores up to 4.40 GHz) ",
            operating_System: "Windows 11 Home 64",
            display_Type: "39.62cms (15.6) FHD (1920 x 1080), TN, Anti-Glare, Non-Touch, 250 Nits",
            memory: "16 GB (8 GB SO-DIMM DDR4 3200MHz + 8 GB Soldered DDR4 3200MHz)",
            warranty: "1 Year Onsite",
            speaker: "Stereo, Dolby® Audio™ Harman brand",
            services: "None",
            weight: "1.7 Kgs",
            battery: "3 cell, 45Wh",
            camera: "720p HD with PrivacyShutter",
            ports: "1xUSB 2.0, 1xUSB 3.2 Gen 1 (Always On), 1xThunderbolt 4 / USB4® 40Gbps, HDMI 2.1, Ethernet (RJ-45), Headphone / microphone combo jack (3.5mm)",
            graphics: "Integrated Intel® UHD Graphics"
        },
        image: ThinkPad
    },

    {
        id: 42, model: "IdeaPad Slim 3i 11th Gen (15, Intel)", brand: "Lenovo", price: 34790,
        specification: {
            processor: "11th Generation Intel® Core™ i3-1115G4 Processor (3.00 GHz up to 4.10 GHz)",
            operating_System: "Windows 11 Home Single Language 64 (English)",
            display_Type: "39.62cms (15.6) FHD (1920 x 1080), TN, Anti-Glare, Non-Touch, 250 Nits",
            memory: "8 GB Soldered DDR4 3200MHz",
            warranty: "1 Year Onsite",
            speaker: "Stereo, Dolby® Audio™",
            services: "1 Year Accidental Damage Protection",
            weight: "1.3 Kgs",
            battery: "4 cell, 59Wh, Upto 13 hours",
            camera: "IR & 1080p FHD Camera with PrivacyShutter",
            ports: "1xUSB 2.0, 1xUSB 3.2 Gen 1, 1xUSB-C 3.2 Gen 1, HDMI 1.4b, 1xCard reader, Headphone / microphone combo jack (3.5mm)",
            graphics: "Integrated Intel® UHD Graphics"
        },
        image: IdeaPad
    },

    {
        id: 43, model: "Yoga 6 Gen 7 (13, AMD)", brand: "Lenovo", price: 80990,
        specification: {
            processor: "AMD Ryzen™ 7 5700U Processor (1.80 GHz up to 4.30 GHz)",
            operating_System: "Windows 11 Home 64 (English)",
            display_Type: "33.78cms (13.3) WUXGA (1920 x 1200), IPS, Dolby Vision™, Touch, 100% sRGB, 300 Nits",
            memory: "16 GB Soldered LPDDR4x 4266MHz",
            warranty: "3 Year Onsite",
            speaker: "Stereo, Dolby® Atmos™",
            services: "1 Year Accidental Damage Protection",
            weight: "1.3 Kgs",
            battery: "4 cell, 59Wh, Upto 13 hours",
            camera: "IR & 1080p FHD Camera with PrivacyShutter",
            ports: "1xUSB 2.0, 1xUSB 3.2 Gen 1, 1xUSB-C 3.2 Gen 1, HDMI 1.4b, 1xCard reader, Headphone / microphone combo jack (3.5mm)",
            graphics: "Integrated AMD Radeon™ Graphics"
        },
        image: Yoga
    },
    
    {
        id: 44, model: "ThinkBook 15 Gen 5 (15, AMD)", brand: "Lenovo", price: 52990,
        specification: {
            processor: "AMD Ryzen™ 5 7530U Processor (2.00 GHz up to 4.50 GHz)",
            operating_System: "Windows 11 Home Single Language 64 (English)",
            display_Type: "39.62cms (15.6) FHD (1920 x 1080), TN, Anti-Glare, Non-Touch, 250 Nits",
            memory: "16 GB (8 GB Soldered DDR4 3200MHz + 8 GB SO-DIMM DDR4 3200MHz)",
            warranty: "1 Year Onsite",
            speaker: "Stereo, Dolby® Audio™",
            services: "None",
            weight: "1.7 Kgs",
            battery: "3 cell, 45Wh, Upto 8 hours",
            camera: "720p HD with PrivacyShutter",
            ports: "1xUSB 3.2 Gen 1, 1xUSB 3.2 Gen 1 (Always On), 2xUSB-C 3.2 Gen 2, HDMI 2.1, Ethernet (RJ-45), Headphone / microphone combo jack (3.5mm)",
            graphics: "Integrated AMD Radeon™ Graphics"
        },
        image: ThinkBook
    },
    {
        id: 45, model: "Legion 5 Gen 6 (15, AMD)", brand: "Lenovo", price: 102490,
        specification: {
            processor: "AMD Ryzen™ 7 5800H Processor (3.20 GHz up to 4.40 GHz)",
            operating_System: "Windows 11 Home Single Language 64 (English)",
            display_Type: "39.62cms (15.6) WQHD (2560 x 1440), IPS, Anti-Glare, Dolby Vision™, Free-Sync, G-Sync, Non-Touch, 100%s RGB, 300 Nits, 165Hz",
            memory: "16 GB SO-DIMM DDR4 3200MHz",
            warranty: "1 Year Onsite",
            speaker: "Stereo, Nahimic Audio™",
            services: "1 Year Accidental Damage Protection",
            weight: "2.4 Kgs",
            battery: "4 cell, 80Wh, Upto 9 hours",
            camera: "720p with E-camera Shutter",
            ports: "4xUSB 3.2 Gen 1 (one Always On), 2xUSB-C 3.2 Gen 2, HDMI 2.1, Ethernet (RJ-45), Headphone / microphone combo jack (3.5mm)",
            graphics: "NVIDIA GeForce® RTX™ 3060 6GB GDDR6"
        },
        image: Legion
    },

    {
        
        id: 46, model: "Lenovo LOQ 13th Gen (15, Intel)", brand: "Lenovo", price: 69990,
        specification: {
            processor: "12th Generation Intel® Core™ i5-12450H Processor (E-cores up to 3.30 GHz P-cores up to 4.40 GHz)",
            operating_System: "Windows 11 Home Single Language 64 (English)",
            display_Type: "39.62cms (15.6) FHD (1920 x 1080), IPS, Anti-Glare, G-Sync, Non-Touch, 45% NTSC, 350 Nits, 144Hz",
            memory: "16 GB (2 x 8 GB) SO-DIMM DDR5 4800MHz",
            warranty: "1 Year Onsite",
            speaker: "Stereo, Nahimic Audio™",
            services: "None",
            weight: "2.4 Kgs",
            battery: "4 cell, 60Wh",
            camera: "1080p FHD with E-Shutter",
            ports: "1xUSB 3.2 Gen 1, 2xUSB 3.2 Gen 2, 1xUSB-C 3.2 Gen 2, HDMI 2.1, Ethernet (RJ-45), Headphone / microphone combo jack (3.5mm)",
            graphics: "NVIDIA GeForce® RTX™ 2050 4GB GDDR6"
        },
        image: LOQ
    },

    {
        
        id: 47, model: "Lenovo V15 Gen 3 (15, Intel)", brand: "Lenovo", price: 53042,
        specification: {
            processor: "12th Generation Intel® Core™ i3-1215U Processor (E-cores up to 3.30 GHz P-cores up to 4.40 GHz)",
            operating_System: "No Operating System",
            display_Type: "39.62cms (15.6) FHD (1920 x 1080), TN, Anti-Glare, Non-Touch, 45% NTSC, 250 Nits, 60Hz",
            memory: "8 GB Soldered DDR4 3200MHz",
            warranty: "1 Year Courier or Carry-in",
            speaker: "Stereo, Dolby® Audio™",
            services: "None",
            weight: "Starting at 1.7 Kgs",
            battery: "2 cell, 38Wh, Upto 5 hour",
            camera: "720P HD with Dual Microphone",
            ports: "1xUSB 2.0, 1xUSB 3.2 Gen 1, 1xUSB-C 3.2 Gen 1, HDMI 1.4b, Ethernet (RJ-45), Headphone / microphone combo jack (3.5mm)",
            graphics: "Integrated Intel® UHD Graphics"
        },
        image: V15
    },

    {
        
        id: 48, model: "Vostro 3520 Laptop", brand: "Dell", price: 34389,
        specification: {
            processor: "11th Generation Intel® Core™ i3-1115G4 Processor (6MB Cache, up to 4.1 GHz)",
            operating_System: "Windows 11 Home Single Language, English",
            display_Type: "15.6, FHD 1920x1080, 120Hz, WVA, Non-Touch, Anti-Glare, 250 nit, Narrow Border, LED-Backlit",
            memory: "8 GB: 1 x 8 GB, DDR4, 3200 MT/s",
            warranty: "1 Year Courier or Carry-in",
            speaker: "Stereo speakers, 2 W x 2 = 4 W total",
            services: "1Y Basic Onsite Service after remote diagnosis with Hardware-Only Support",
            weight: "Starting at 1.63 Kgs",
            battery: "3 Cell, 41 Wh, integrated",
            camera: "720p at 30 fps HD camera Single integrated microphone",
            ports: "Ports 1 USB 3.2 Gen 1 Type-C® port with DisplayPort 1.4 (on 12th Gen Processor configured with Type-C®)1 USB 3.2 Gen 1 port (on systems configured with Type-C®) 2 USB 3.2 Gen 1 port (on systems configured with non Type-C®) 1 USB 2.0 port 1 headset (headphone and microphone combo) port 1 HDMI 1.4 port HDMI 1.4 (Maximum resolution supported over HDMI is 1920x1080 @60Hz. No 4K/2K output) 1 RJ45 Ethernet port (flip-down)",
            graphics: "Intel® UHD Graphics"
        },
        image: Vostro
    },
    { 
        id: 49, model: "Inspiron 16 Laptop", brand: "Dell", price: 45090,
        specification: {
            processor: "12th Gen Intel® Core™ i3-1215U (10 MB cache, 6 cores, 8 threads, up to 4.40 GHz Turbo)",
            operating_System: "Windows 11 Home Single Language, English",
            display_Type: "16.0-inch 16:10 FHD+ (1920 x 1200) Anti-Glare Non-Touch 250nits WVA Display with ComfortView Support",
            memory: "8 GB: 1 x 8 GB, DDR4, 3200 MT/s",
            warranty: "1 Year Courier or Carry-in",
            speaker: "Stereo speakers with Waves MaxxAudio® Pro, 2 W x 2",
            services: "1Y Basic Onsite Service after remote diagnosis with Hardware-Only Support",
            weight: "Starting at 1.7 Kgs",
            battery: "4 Cell, 54 Wh, integrated",
            camera: "1080p at 30 fps FHD camera Dual-array microphones",
            ports: "2 USB 3.2 Gen 1 Type-A ports 1 USB 3.2 Gen 2x1 Type-C port with Power Delivery and DisplayPort 1 Audio jack 1 HDMI 1.4 port HDMI 1.4 (Maximum resolution supported over HDMI is 1920x1080 @60Hz. No 4K/2K output) 1 Power-adapter port",
            graphics: "Intel® UHD Graphics"
        },
        image: Inspiron
    },
    { 
        id: 50, model: "ZBook Firefly 35.6cm (14) G9 Mobile Workstation PC", brand: "HP", price: 114247,
       bough_date:"",
        specification: {
            processor: "12th Generation Intel® Core™ i5 processor Intel® Core™ i5-1235U (up to 4.4 GHz with Intel® Turbo Boost Technology, 12 MB L3 cache, 10 cores, 12 threads)",
            operating_System: "Windows 11 Home Single Language- HP recommends Windows 11 Pro for business",
            display_Type: "35.6 cm (14) diagonal, WUXGA (1920 x 1200), IPS, narrow bezel, anti-glare, 250 nits, 45% NTSC",
            memory: "16 GB DDR5-4800 MHz RAM (1 x 16 GB)",
            warranty: "1 year (1/1/1) limited warranty includes 1 year of parts, labor and on-site repair.",
            speaker: "Stereo speakers with Waves MaxxAudio® Pro, 2 W x 2",
            services: "1Y Basic Onsite Service after remote diagnosis with Hardware-Only Support",
            weight: "Starting at 1.47 Kgs",
            battery: "65 W USB Type-C™ adapter",
            camera: "1080p at 30 fps FHD camera Dual-array microphones",
            ports: "1 SuperSpeed USB Type-A 5Gbps signaling rate (charging); 1 HDMI 2.0b; 2 Thunderbolt™ 4 with USB4™ Type-C® 40Gbps signaling rate (USB Power Delivery, DisplayPort™ 1.4, HP Sleep and Charge)",
            graphics: "NVIDIA® T550 Laptop GPU (4 GB GDDR6 dedicated)"
        },
        image: Inspiron
    }
]

export default laptops