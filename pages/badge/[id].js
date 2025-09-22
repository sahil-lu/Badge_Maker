import { useRouter } from 'next/router';
import BadgePreview from '../../components/BadgePreview';

const BadgePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // For now, we'll use the ID to reconstruct the badge data
  // In a real app, you'd fetch this from a database
  const badgeData = {
    name: decodeURIComponent(id || 'Your Name'),
    role: '', // You could store this in the URL or fetch from DB
    image: null, // You could store this in the URL or fetch from DB
  };

  return (
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
  );
};

export default BadgePage;
