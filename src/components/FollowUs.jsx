import Card from './Card';

const FollowUs = () => {
  const images = [
    'src/assets/images/img-1.jpg',
    'src/assets/images/img-2.jpg',
    'src/assets/images/img-3.jpg',
    'src/assets/images/img-4.jpg'
  ];

  return (
    <section className="bg-pink-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Follow Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <Card key={index} imgSrc={img} altText={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;