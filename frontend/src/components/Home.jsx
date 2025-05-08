// src/components/Home.jsx
function Home() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 flex flex-col justify-center items-center text-center px-6 py-12">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-pink-600 mb-4">
                Bride & Groom
            </h1>
            <h1 className="text-3xl text-red-600">Tailwind Test</h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-xl mb-6">
                We’re tying the knot! 💍 Join us in celebrating our love and new beginnings.
            </p>
            <div className="text-center text-sm text-gray-500 italic">
                <p>Save the Date</p>
                <p className="text-xl text-pink-700 font-semibold">April 14, 2025</p>
            </div>
        </section>
    );
}

export default Home;
