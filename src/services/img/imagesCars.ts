const imageSamples = [
    'https://cars.usnews.com/static/images/Auto/izmo/i159615234/2023_acura_integra_angularfront.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/2023-ford-gt-mk-iv-02-1670543667.jpg',
    'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2023/perfomance/corvette/01-images/nav/2023-corvette-3lt-gkz-driver-front-3quarter-nav.jpg',
    'https://imageio.forbes.com/specials-images/imageserve/5f962d31e7b04bbfd2f68758/Bugatti-Chiron-Super-Sport-300--Driving/960x0.jpg',
    'https://www.mynrma.com.au/-/media/2021-best-cars-ford-mustang-hero-mobile.jpg',
    'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg',
    'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/porsche_911_front_track.jpg',
    'https://www.bentleymotors.com/content/dam/bentley/Master/World%20of%20Bentley/Mulliner/redesign/coachbuilt/Mulliner%20Batur%201920x1080.jpg/_jcr_content/renditions/original.image_file.700.394.file/Mulliner%20Batur%201920x1080.jpg',
    'https://stimg2.cardekho.com/images/carNewsimages/userimages/29421/1658400931326/FeatureStories.jpg',
]

export  const getRandomImage = () => imageSamples[Math.floor(Math.random() * imageSamples.length)];
