import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <img
                src="https://res.cloudinary.com/dvgtcyyzh/image/upload/v1732707944/Voiceflows__5_-removebg-preview_kwyo4t.png"
                alt="Vox Intelligence"
                className="h-12 w-auto"
              />
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-powered voice chat solutions for your business. In partnership
              with Synthflow. This is a bootstrapped startup. Contact us at
              help@voxintelligence.online
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/usecases">Use Cases</Link>
              </li>
              <li>
                <Link to="/for-startups">For Startups</Link>
              </li>
              <li>
                <a href="mailto:affiliates@voxintelligence.online">Affiliates</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vox Intelligence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
