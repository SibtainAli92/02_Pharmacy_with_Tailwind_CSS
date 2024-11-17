export default function Contact() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 bg-pharmacy">
            <div className="max-w-lg w-full p-6 bg-[rgba(163,_157,_157,_0.8);] shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-center text-[#333] mb-6 font-[math]">Contact Us</h2>
                <form className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="name" className="block text-black font-semibold font-[math]">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="block text-black font-semibold font-[math]">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="block text-black font-semibold font-[math]">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition font-[math]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}