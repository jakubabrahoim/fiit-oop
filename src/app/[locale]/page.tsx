// basic page that redirects from / to /sk/docs
import { redirect } from 'next/navigation';

export default function LocalePage() {
    redirect('/sk/docs');
}
