export interface Project {
  id: number;
  slug: string;
  titleLeft: string;
  titleRight: string;
  catLeft: string;
  catRight: string;
  num: string;
  client: string;
  duration: string;
  img: string;
  isVideo?: boolean;
  description?: string;
  conceptHeading?: string;
  conceptDescription?: string;
  role?: string;
  year?: string;
  accentColor?: string;
  gallery?: { 
    url: string; 
    isVideo?: boolean; 
    hasAudio?: boolean;
    captionTitle?: string;
    captionText?: string;
    layout?: 'full' | 'half' | 'third';
  }[];
}

export const projectsData: Project[] = [
  {
    id: 10,
    slug: "nike-run-for-life",
    titleLeft: "Run For\nLife",
    titleRight: "Nike\nRunning",
    catLeft: "360 CAMPAIGN",
    catRight: "SPORTS",
    num: "01.",
    client: "NIKE RUNNING",
    duration: ".42",
    img: "/projects/Nike - Run for Life/OOH 3.jpeg",
    isVideo: false,
    description: "The core barrier wasn't 'I can't run'—it was 'I'm not a runner.' This 360° campaign dismantles the intimidation of performance fitness, shifting the focus from elite athletes to the everyday rhythm of human movement.",
    conceptHeading: "Running can be for me.",
    conceptDescription: "To make running feel accessible, I defined strict strategic roles: Nike acts as the motivator, the product is the helper, and the human owns the emotional payoff—simply feeling alive. This meant moving away from high-gloss studio aesthetics.\n\nAs the Art Director, I established a raw, cinematic visual world. We paired authentic street photography with bold, unpolished typography to create the 'Run For Life' identity. By grounding the campaign in the real, imperfect movement of the city, we created a premium editorial look that gave ordinary people permission to claim running as their own.",
    role: "Concept & Art Direction",
    year: "2024",
    accentColor: "rgba(255, 102, 0, 0.4)",
    gallery: [
      { url: "/projects/Nike - Run for Life/main video.mp4", isVideo: true, layout: 'full', captionTitle: "Hero Film", captionText: "Everyone's running. To get somewhere. To keep things moving. But sometimes... you just need to move." },
      { url: "/projects/Nike - Run for Life/OOH 2.png", layout: 'full', captionTitle: "01 / OOH", captionText: "Make the city notice. The OOH system evolves from human emotion to mapping the city, proving that running belongs in everyday life." },
      { url: "/projects/Nike - Run for Life/OOH 4.png", layout: 'half' },
      { url: "/projects/Nike - Run for Life/OOH 5.PNG", layout: 'half' },
      { url: "/projects/Nike - Run for Life/social 1.PNG", layout: 'third', captionTitle: "02 / Social", captionText: "Make the campaign personal. The feed drops the distance, using intimate, feed-native photography to bridge the gap between observing and participating." },
      { url: "/projects/Nike - Run for Life/social 2.PNG", layout: 'third' },
      { url: "/projects/Nike - Run for Life/social 4.PNG", layout: 'third' },
      { url: "/projects/Nike - Run for Life/on ground activation 1.PNG", layout: 'half', captionTitle: "03 / Experiential", captionText: "Don't tell people why they run. Let them feel it. A travelling activation where the experience matters far more than the performance." },
      { url: "/projects/Nike - Run for Life/on ground activation 2.PNG", layout: 'half' },
      { url: "/projects/Nike - Run for Life/mobile experience.PNG", layout: 'half', captionTitle: "04 / Digital", captionText: "Your run. Your pace. Your journey. The digital touchpoint doesn't tell you how to run—it remembers why you started." },
      { url: "/projects/Nike - Run for Life/store experience 1.PNG", layout: 'half', captionTitle: "05 / Retail", captionText: "From the street to the store. Retail continues the conversation: Where are you now? What's next?" },
      { url: "/projects/Nike - Run for Life/storyboard.png", layout: 'full', captionTitle: "Storyboard & Process" },
      { url: "/projects/Nike - Run for Life/Main LOCKUP.PNG", layout: 'full', captionTitle: "Final Lockup", captionText: "Black, Off-white, and Campaign Orange. Unpolished, unapologetic, and built for movement." }
    ]
  },
  {
    id: 11,
    slug: "fever-tree",
    titleLeft: "Mix Your\n Aura",
    titleRight: "Fever-Tree\nCampaign",
    catLeft: "CAMPAIGN & ART DIRECTION",
    catRight: "BEVERAGE",
    num: "11.",
    client: "FEVER-TREE",
    duration: ".42",
    img: "/projects/Fever-Tree/OOH Main.png",
    isVideo: false,
    description: "Fever-Tree already owns premium mixers. The opportunity was to make the brand feel more culturally relevant to a younger audience by giving it a stronger role in the social moments where drinks actually live.",
    conceptHeading: "One person. Different sides.",
    conceptDescription: "We don't show up the same way everywhere. The person you see in a corporate party isn't necessarily the same person you meet at a house party. But instead of treating these as separate audiences, we saw them as different sides of the same person. We turn Fever-Tree into a catalyst for these different sides of personality. The campaign follows people through different social occasions, showing how their personality, energy and behaviour shift with the moment.",
    role: "Art Direction & Campaign Concept",
    year: "2024",
    accentColor: "rgba(157, 78, 221, 0.4)",
    gallery: [
      { url: "/projects/Fever-Tree/OOH Main.png", layout: 'full', captionTitle: "Hero KV", captionText: "Mix Your Aura" },
      { url: "/projects/Fever-Tree/KV 1.PNG", layout: 'full' },
      { url: "/projects/Fever-Tree/KV 2.PNG", layout: 'half' },
      { url: "/projects/Fever-Tree/KV 3.PNG", layout: 'half' },
      { url: "/projects/Fever-Tree/KV 4.PNG", layout: 'half' },
      { url: "/projects/Fever-Tree/KV 5.PNG", layout: 'half' },
      { url: "/projects/Fever-Tree/OOH 1.png", layout: 'half' },
      { url: "/projects/Fever-Tree/OOH 2.png", layout: 'half' },
      { url: "/projects/Fever-Tree/Experiential.png", layout: 'full' },
      { url: "/projects/Fever-Tree/Social + Influencer.png", layout: 'full' }
    ]
  },
  {
    id: 1,
    slug: "bad-boy-pizza",
    titleLeft: "Bad Boy\nPizza",
    titleRight: "Brand\nIdentity",
    catLeft: "BRANDING & PACKAGING",
    catRight: "F&B",
    num: "01.",
    client: "BAD BOY PIZZA",
    duration: ".42",
    img: "/projects/Bad Boy Pizza/cover.png",
    isVideo: false,
    description: "A bold, unapologetic brand identity for Bad Boy Pizza. We created a striking visual language that captures the rebellious spirit of the brand without feeling forced.",
    role: "Senior Visual Designer",
    year: "2024",
    accentColor: "rgba(192, 235, 48, 0.4)",
    gallery: [
      { url: "/projects/Bad Boy Pizza/1.png" },
      { url: "/projects/Bad Boy Pizza/2.png" },
      { url: "/projects/Bad Boy Pizza/3.png" },
      { url: "/projects/Bad Boy Pizza/4.png" },
      { url: "/projects/Bad Boy Pizza/5.png" },
      { url: "/projects/Bad Boy Pizza/6.mp4", isVideo: true },
      { url: "/projects/Bad Boy Pizza/7.mp4", isVideo: true },
      { url: "/projects/Bad Boy Pizza/8.jpg" },
      { url: "/projects/Bad Boy Pizza/9.jpg" },
      { url: "/projects/Bad Boy Pizza/10.jpg" }
    ]
  },
  {
    id: 2,
    slug: "disney-hotstar",
    titleLeft: "Disney+\nHotstar",
    titleRight: "Motion\nShowreel",
    catLeft: "MOTION GRAPHICS",
    catRight: "ENTERTAINMENT",
    num: "02.",
    client: "DISNEY+ HOTSTAR",
    duration: ".42",
    img: "/projects/Disney Hotstar/v5.mp4",
    isVideo: true,
    description: "A high-energy motion graphics showreel highlighting the best content and visual assets for Disney+ Hotstar.",
    conceptHeading: "A fast-paced motion showreel that captures the energy of Disney+ Hotstar's best content.",
    conceptDescription: "When dealing with a massive library of high-tier entertainment, the challenge is maintaining a cohesive brand rhythm without overshadowing the content itself. For this Disney+ Hotstar showreel, the goal was to craft a fast-paced, kinetic visual journey that distills thousands of hours of footage into a single, high-impact narrative.\n\nBy leveraging dynamic masking and fluid transitions, we created a visual tempo that matches the intensity of the platform's top-tier offerings. The motion design allows the imagery to breathe while keeping strict alignment and pacing. This isn't just a montage—it's a strategic piece of branding designed to keep viewers hooked from the first second.",
    role: "Motion Designer",
    year: "2023",
    accentColor: "rgba(31, 60, 136, 0.4)",
    gallery: [
      { url: "/projects/Disney Hotstar/v5.mp4", isVideo: true, layout: 'full', captionTitle: "The Final Cut", captionText: "A high-octane edit balancing multiple global IPs." }
    ]
  },
  {
    id: 3,
    slug: "ghost-kitchens",
    titleLeft: "Ghost\nKitchens",
    titleRight: "India\nWebsite",
    catLeft: "WEB DESIGN",
    catRight: "TECH & F&B",
    num: "03.",
    client: "GHOST KITCHENS INDIA",
    duration: ".42",
    img: "/projects/Ghost Kitchens/homepage.mp4",
    isVideo: true,
    description: "A sleek, conversion-optimized website design for Ghost Kitchens India, seamlessly housing multiple restaurant brands under one digital roof.",
    conceptHeading: "Designing a clean, dark-mode website that houses multiple restaurant brands without confusing the user.",
    conceptDescription: "Ghost Kitchens needed a website capable of hosting multiple distinct restaurant brands under one seamless roof. The main UI/UX challenge was preventing cognitive overload while making it incredibly easy for users to find what they want and convert.\n\nWe established a clean 12-column grid system and a clear visual hierarchy, using a dark-mode aesthetic that makes the vibrant food photography pop. Every micro-interaction and user flow was carefully designed to reduce friction from discovery to checkout. By balancing aesthetic elegance with ease of use, the resulting platform elevates the brand's digital presence and directly helps drive user acquisition.",
    role: "Senior Visual Designer",
    year: "2023",
    accentColor: "rgba(57, 255, 20, 0.4)",
    gallery: [
      { url: "/projects/Ghost Kitchens/homepage.mp4", isVideo: true, layout: 'full', captionTitle: "Hero Interaction", captionText: "The dark-mode aesthetic is immediately established on the homepage, utilizing smooth scroll-jacking to present the different restaurant brands without overwhelming the user." },
      { url: "/projects/Ghost Kitchens/franchise page.mp4", isVideo: true, layout: 'half', captionTitle: "Franchise Conversion Flow", captionText: "A simplified, highly legible form structure was designed specifically to increase B2B lead generation for franchise inquiries." }
    ]
  },
  {
    id: 4,
    slug: "cheelizza",
    titleLeft: "Cheelizza\nOOH",
    titleRight: "Marketing\nCampaign",
    catLeft: "OOH CAMPAIGN",
    catRight: "F&B",
    num: "04.",
    client: "CHEELIZZA",
    duration: ".42",
    img: "/projects/Cheelizza/Ad on Taxi.png",
    isVideo: false,
    description: "An engaging Out-Of-Home (OOH) advertising campaign designed for Cheelizza to grab attention across busy urban environments.",
    conceptHeading: "A bold OOH campaign designed to grab attention instantly on the streets.",
    conceptDescription: "In the cluttered visual landscape of urban transit and street-level advertising, subtlety usually gets lost. The Cheelizza OOH campaign was designed specifically for high-impact, split-second readability. Whether viewed from a passing taxi or a static bus shelter, the visual hierarchy was tested for immediate comprehension and brand recall.\n\nWe utilized stark, bold typography juxtaposed against highly saturated, mouth-watering food photography. The color palette was deliberately kept simple to create maximum contrast against typical city environments. This campaign proves that effective design isn't just about looking good—it's about understanding the physical context in which the audience experiences the creative.",
    role: "Senior Visual Designer",
    year: "2024",
    accentColor: "rgba(255, 100, 0, 0.4)",
    gallery: [
      { url: "/projects/Cheelizza/Bus Stop OOH.mp4", isVideo: true, hasAudio: false, layout: 'full', captionTitle: "Environmental Scale", captionText: "The typography was stress-tested for legibility across various urban lighting conditions." },
      { url: "/projects/Cheelizza/Ad on Taxi.png", layout: 'half', captionTitle: "Transit Adaptation", captionText: "Adapting the brutalist visual language to fit the chaotic environment of moving transit." },
      { url: "/projects/Cheelizza/IMG_1565.mp4", isVideo: true, hasAudio: false, layout: 'half' },
      { url: "/projects/Cheelizza/promo-banner.jpg", layout: 'full', captionTitle: "Promotional Banner", captionText: "A high-contrast BOGO promotional banner optimized for digital delivery platforms." }
    ]
  },
  {
    id: 5,
    slug: "bytepe",
    titleLeft: "BytePe\nBrand",
    titleRight: "Visual\nIdentity",
    catLeft: "BRANDING",
    catRight: "FINTECH",
    num: "05.",
    client: "BYTEPE",
    duration: ".42",
    img: "/projects/BytePe/Standee Banner Interior Mockup V3.png",
    isVideo: false,
    description: "A comprehensive brand identity and collaterals package crafted for BytePe to ensure consistent visual communication.",
    conceptHeading: "Building a clean, trustworthy visual identity for a modern fintech brand.",
    conceptDescription: "In the fintech space, consumer trust is everything. For BytePe, the goal was to develop a brand identity that felt secure, authoritative, and technologically advanced without feeling cold.\n\nWe built the visual system around clean, geometric typography and a cool, restrained color palette that evokes stability. From corporate business cards to large-scale exhibition standees, the design system scales perfectly across all touchpoints. The precise use of negative space, structured layouts, and minimalist iconography communicates a forward-thinking brand that users can trust with their finances.",
    role: "Senior Visual Designer",
    year: "2024",
    accentColor: "rgba(0, 150, 255, 0.4)",
    gallery: [
      { url: "/projects/BytePe/Standee Banner Interior Mockup V3.png", layout: 'full', captionTitle: "Event Activation", captionText: "A towering, minimalist standee designed to establish immediate authority at crowded fintech conferences." },
      { url: "/projects/BytePe/Business card.jpg", layout: 'half', captionTitle: "Corporate Collateral", captionText: "Heavy stock business cards utilizing negative space to communicate premium brand positioning." },
      { url: "/projects/BytePe/ID Card-.png", layout: 'half' },
      { url: "/projects/BytePe/Canopy.png", layout: 'full' }
    ]
  },
  {
    id: 6,
    slug: "nusrico",
    titleLeft: "Nusrico\nDesign",
    titleRight: "Merch &\nBranding",
    catLeft: "BRANDING & MERCH",
    catRight: "CORPORATE",
    num: "06.",
    client: "NUSRICO",
    duration: ".42",
    img: "/projects/Nusrico/Desktop Wallpaper.png",
    isVideo: false,
    description: "Distinctive corporate branding and merchandise designs for Nusrico, creating a cohesive and premium brand experience.",
    conceptHeading: "Translating a corporate brand into tangible, premium physical products.",
    conceptDescription: "A brand's identity needs to stay consistent when it moves from a screen into the physical world. For Nusrico, the objective was to design a suite of corporate merchandise and collateral that felt less like cheap promotional items and more like premium lifestyle products.\n\nFrom bespoke diaries to high-quality tote bags, every item was designed with a focus on tactile experience. We prioritized minimalist layouts, sophisticated material textures, and subtle, confident logo placements over loud branding. This approach transforms everyday corporate collateral into coveted items, elevating the perceived value of the Nusrico brand.",
    role: "Senior Visual Designer",
    year: "2024",
    accentColor: "rgba(50, 200, 100, 0.4)",
    gallery: [
      { url: "/projects/Nusrico/Desktop Wallpaper.png", layout: 'full', captionTitle: "Digital Presence", captionText: "Minimalist digital wallpapers serving as the foundation of the corporate visual identity." },
      { url: "/projects/Nusrico/Diary.png", layout: 'half', captionTitle: "Tactile Merchandise", captionText: "Premium leather-bound diaries with subtle debossed branding." },
      { url: "/projects/Nusrico/Business Card.png", layout: 'half', captionTitle: "Professional Exchange", captionText: "Clean, sophisticated business cards emphasizing negative space and crisp typographic alignment." },
      { url: "/projects/Nusrico/Tote Bag.png", layout: 'full', captionTitle: "Lifestyle Integration", captionText: "High-quality canvas totes designed for employee and client gifting." },
      { url: "/projects/Nusrico/lanyard.jpg", layout: 'half', captionTitle: "Employee Identity", captionText: "Custom-woven lanyards that seamlessly extend the brand's visual system into everyday corporate wear." },
      { url: "/projects/Nusrico/shirt.jpg", layout: 'half' },
      { url: "/projects/Nusrico/billboard.jpg", layout: 'half' },
      { url: "/projects/Nusrico/email-signature.jpg", layout: 'half' },
      { url: "/projects/Nusrico/newspaper-ad.jpg", layout: 'full' }
    ]
  },
  {
    id: 7,
    slug: "emailer-brochure",
    titleLeft: "Emailer &\nBrochure",
    titleRight: "Brand\nCollateral",
    catLeft: "PRINT & DIGITAL",
    catRight: "MARKETING",
    num: "07.",
    client: "VARIOUS CLIENTS",
    duration: ".42",
    img: "/projects/E-Mailer Design/split_cover.png",
    isVideo: false,
    description: "A collection of engaging e-mailer campaigns and premium print brochures crafted for various brand marketing strategies.",
    conceptHeading: "Bridging the gap between engaging digital campaigns and tactile print collateral.",
    conceptDescription: "Effective visual design requires fluency across both digital and physical mediums. This collection showcases a versatile approach to both.\n\nFor the digital emailer campaigns, the layouts were optimized for scannability, clear calls-to-action, and flawless mobile responsiveness to drive engagement. Conversely, the print brochures utilize a sophisticated editorial layout, employing classic grid structures, thoughtful typographic pacing, and high-quality print finishes to encourage slower, deeper reading. Together, they demonstrate how to adapt visual strategy to fit exactly how the audience consumes the content.",
    role: "Senior Visual Designer",
    year: "2023",
    accentColor: "rgba(217, 72, 124, 0.4)",
    gallery: [
      { url: "/projects/E-Mailer Design/3(2).png", layout: 'third', captionTitle: "Digital Campaigns", captionText: "High-converting email structures optimized for mobile reading." },
      { url: "/projects/E-Mailer Design/3(3).png", layout: 'third' },
      { url: "/projects/E-Mailer Design/3(4).png", layout: 'third' },
      { url: "/projects/Brochure/Cover.jpg", layout: 'full', captionTitle: "Print Editorial", captionText: "Classic grid layouts ensuring deep engagement in physical formats." },
      { url: "/projects/Brochure/Brochure_4_pager_Salsette-27_revised_LOWRES(1)_page-0001.jpg", layout: 'half' },
      { url: "/projects/Brochure/Brochure_4_pager_Salsette-27_revised_LOWRES(1)_page-0002.jpg", layout: 'half' },
      { url: "/projects/Brochure/Brochure_4_pager_Salsette-27_revised_LOWRES(1)_page-0003.jpg", layout: 'half' },
      { url: "/projects/Brochure/Brochure_4_pager_Salsette-27_revised_LOWRES(1)_page-0004.jpg", layout: 'half' }
    ]
  },
  {
    id: 8,
    slug: "statics",
    titleLeft: "Static\nDesigns",
    titleRight: "Visual\nArt",
    catLeft: "GRAPHIC DESIGN",
    catRight: "VARIOUS",
    num: "08.",
    client: "VARIOUS CLIENTS",
    duration: ".42",
    img: "/projects/Statics/cover.png",
    isVideo: false,
    description: "A comprehensive collection of static visual designs, graphic art, and print-ready creative materials.",
    conceptHeading: "A curated collection of static visual art built on strong typography, color, and negative space.",
    conceptDescription: "This curated selection of static visual art demonstrates adaptability across various industries. Each piece relies on a strong foundational understanding of visual hierarchy, ensuring the core message is never lost amidst aesthetic flourishes. From vibrant social media carousels to stark, minimalist posters, the portfolio showcases a rigorous commitment to solving problems through design.",
    role: "Senior Visual Designer",
    year: "2023",
    accentColor: "rgba(0, 200, 255, 0.4)",
    gallery: [
      { url: "/projects/Statics/002.png", layout: 'full', captionTitle: "Key Visuals", captionText: "Establishing a strong, immediate hierarchy through bold typography and striking color contrasts. The goal here is to halt scrolling behavior instantly." },
      { url: "/projects/Statics/01.jpg", layout: 'full' },
      { url: "/projects/Statics/02.jpg", layout: 'full' },
      { url: "/projects/Statics/03.jpg", layout: 'half', captionTitle: "Appetite Appeal", captionText: "Using the raw, explosive ingredients to instantly create hunger, which naturally draws the viewer's eye up to the core headline. The stark dark background ensures the food remains the hero." },
      { url: "/projects/Statics/6.jpg", layout: 'half' },
      { url: "/projects/Statics/12.png", layout: 'full' },
      { url: "/projects/Statics/17.jpg", layout: 'half', captionTitle: "Negative Space", captionText: "Allowing the subject matter to breathe. In crowded digital spaces, minimalism and intentional emptiness often speak the loudest." },
      { url: "/projects/Statics/10.png", layout: 'half' },
      { url: "/projects/Statics/11.png", layout: 'half' },
      { url: "/projects/Statics/13.jpg", layout: 'half', captionTitle: "Product Integration", captionText: "Seamlessly blending physical product photography with abstract graphic elements to create a surreal, premium aesthetic." },
      { url: "/projects/Statics/18.png", layout: 'half', captionTitle: "Campaign Architecture", captionText: "Designing flexible visual systems that can scale horizontally across different ad formats while maintaining brand integrity." },
      { url: "/projects/Statics/3(1).jpg", layout: 'half' },
      { url: "/projects/Statics/4.png", layout: 'half' },
      { url: "/projects/Statics/7.png", layout: 'half' },
      { url: "/projects/Statics/8.png", layout: 'half' },
      { url: "/projects/Statics/Carousel_9Mar.jpg", layout: 'full', captionTitle: "Multi-Panel Storytelling", captionText: "Social media carousels designed to reward continuous swiping. We use overlapping elements across the seams to pull the user through the narrative, dramatically increasing dwell time." },
      { url: "/projects/Statics/Carousel_archies.png", layout: 'full', captionTitle: "Sequential Engagement", captionText: "Breaking down complex information into digestible, highly visual micro-interactions." }
    ]
  },
  {
    id: 9,
    slug: "other-reels",
    titleLeft: "Short\nForm",
    titleRight: "Video\nReels",
    catLeft: "SOCIAL MEDIA",
    catRight: "VARIOUS",
    num: "09.",
    client: "VARIOUS CLIENTS",
    duration: ".42",
    img: "/projects/Other Reels/cover.png",
    isVideo: false,
    description: "Dynamic and engaging short-form video content designed for social media platforms and brand storytelling.",
    conceptHeading: "Crafting impactful short-form video through rapid pacing and visual hooks.",
    conceptDescription: "In the hyper-competitive landscape of short-form video, capturing attention within the first three seconds is critical. These reels were edited with a deep understanding of platform trends, utilizing rapid cuts, synchronized audio-visual cues, and striking cover imagery. The result is a highly engaging content library that drives retention and brand awareness across TikTok, Instagram Reels, and YouTube Shorts.",
    role: "Senior Visual Designer",
    year: "2023",
    accentColor: "rgba(255, 215, 0, 0.4)",
    gallery: [
      { url: "/projects/Fintech Reels/2.mp4", isVideo: true, layout: 'third', captionTitle: "Fintech Content", captionText: "Rapid-fire educational reels optimized for maximum retention." },
      { url: "/projects/Fintech Reels/3.mp4", isVideo: true, layout: 'third' },
      { url: "/projects/Fintech Reels/4.mp4", isVideo: true, layout: 'third' },
      { url: "/projects/Fintech Reels/5.mp4", isVideo: true, layout: 'third' },
      { url: "/projects/Other Reels/10.mp4", isVideo: true, layout: 'third' },
      { url: "/projects/Other Reels/6.mp4", isVideo: true, layout: 'third' },
      { url: "/projects/Other Reels/7 - Classic Margarita.mp4", isVideo: true, layout: 'third' },
      { url: "/projects/Other Reels/7.mp4", isVideo: true, layout: 'third' },
      { url: "/projects/Other Reels/8 (1).mp4", isVideo: true, layout: 'third' },
      { url: "/projects/Other Reels/9.mp4", isVideo: true, layout: 'third' },
      { url: "/projects/Other Reels/Hyatt - Rika - Brand Film 1920x1080.mp4", isVideo: true, layout: 'full', captionTitle: "Brand Film", captionText: "A cinematic, immersive brand film for Hyatt Rika." }
    ]
  }
];
