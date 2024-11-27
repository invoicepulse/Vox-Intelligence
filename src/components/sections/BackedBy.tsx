export function BackedBySection() {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 mb-5">
              <span className="text-sm font-medium leading-none text-gray-900">Backed By</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Backed by the best!</h2>
          </div>
          <div className="w-full flex justify-center">
            <img
              src="https://res.cloudinary.com/dvgtcyyzh/image/upload/v1732582593/Add_a_heading__1_-removebg-preview_ehn4av.png"
              alt="Our Backers and Partners"
              width={1000}
              height={130}
              className="w-auto max-w-full h-auto object-contain"
              style={{ maxHeight: '130px' }}
            />
          </div>
        </div>
      </section>
    );
  }
