import { useRouter } from 'next/router';
import Head from 'next/head';
import BadgePreview from '../../components/BadgePreview';

const BadgePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // For now, we'll use the ID to reconstruct the badge data
  // In a real app, you'd fetch this from a database
  const badgeData = {
    name: decodeURIComponent(id || 'Your Name'),
    role: 'Participant', // Default role for shared badge
    image: null, // You could store this in the URL or fetch from DB
  };

  const pageTitle = `${badgeData.name} - LISA Ai for HR Badge`;
  const pageDescription = `Congratulations to ${badgeData.name} for earning their LISA Ai for HR badge! Join the future of HR automation.`;
  const pageUrl = `https://badge-maker-phi.vercel.app/badge/${encodeURIComponent(badgeData.name)}`;
  const badgeImageUrl = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=630&fit=crop&crop=center&auto=format&q=80';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={badgeImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="LISA Ai for HR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={badgeImageUrl} />
        
        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
      </Head>
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          LISA Ai for HR Badge
        </h1>
        
        <div className="flex justify-center">
          <BadgePreview 
            name={badgeData.name} 
            role={badgeData.role}
            image={badgeData.image}
          />
        </div>
        
        <div className="mt-8">
          <p className="text-gray-600 mb-4">
            This badge was earned by {badgeData.name} for completing the LISA Ai for HR program.
          </p>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Go Back
            </button>
            
            <button
              onClick={() => window.print()}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Print Badge
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BadgePage;
