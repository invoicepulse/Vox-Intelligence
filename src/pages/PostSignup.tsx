import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function PostSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Thanks for choosing us
        </h1>
        <p className="text-lg text-muted-foreground">
          We will verify details and email you username and password for your
          new voiceflows account. Then you would be able to login into{' '}
          <a
            href="https://app.voiceflows.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            app.voiceflows.online
          </a>{' '}
          by entering emailed credentials and you will be able to book a demo
          with us on your schedule.
        </p>
        <Link to="/">
          <Button className="mt-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
