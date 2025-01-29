import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="font-bold text-2xl font-['Audiowide'] tracking-wider">Vocyth</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-powered voice chat solutions for your business. In partnership
              with Synthflow. Contact us at help@vocyth.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/usecases">Use Cases</a>
              </li>
              <li>
                <a href="mailto:affiliates@vocyth.online">Affiliates</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vocyth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
