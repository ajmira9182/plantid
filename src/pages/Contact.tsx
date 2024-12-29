import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-sage-800 mb-8 animate-fade-up">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8 animate-fade-up">
            <div>
              <h2 className="text-2xl font-semibold text-sage-800 mb-6">Get in Touch</h2>
              <p className="text-sage-700 mb-8">
                Have questions about Flora Vision? We're here to help! Reach out to us through any of the following channels:
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <Mail className="w-6 h-6 text-sage-600" />
                    <div>
                      <h3 className="font-medium text-sage-800">Email</h3>
                      <p className="text-sage-600">support@floravision.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <Phone className="w-6 h-6 text-sage-600" />
                    <div>
                      <h3 className="font-medium text-sage-800">Phone</h3>
                      <p className="text-sage-600">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <MapPin className="w-6 h-6 text-sage-600" />
                    <div>
                      <h3 className="font-medium text-sage-800">Location</h3>
                      <p className="text-sage-600">123 Botanical Garden Street<br />Green City, GC 12345</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-sage-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-sage-800 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sage-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-sage-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sage-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-sage-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sage-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-sage-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-sage-600 text-white py-2 px-4 rounded-md hover:bg-sage-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;