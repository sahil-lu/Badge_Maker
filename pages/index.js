import { useState } from 'react';
import BadgePreview from '../components/BadgePreview';
import html2canvas from 'html2canvas';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    image: null
  });
  const [isMinting, setIsMinting] = useState(false);
  const [mintedBadge, setMintedBadge] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          image: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }

    setIsMinting(true);
    setError('');

    try {
      const response = await fetch('/api/mint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          role: formData.role.trim(),
          image: formData.image
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to mint badge');
      }

      const result = await response.json();
      setMintedBadge(result);
    } catch (err) {
      setError('Failed to mint badge. Please try again.');
      console.error('Error minting badge:', err);
    } finally {
      setIsMinting(false);
    }
  };

  const handleLinkedInShare = () => {
    if (mintedBadge?.share_url) {
      // Create a text description for the LinkedIn post
      const postText = `Just earned my LISA Ai for HR badge! 🏆\n\nName: ${mintedBadge.name}${mintedBadge.role ? `\nRole: ${mintedBadge.role}` : ''}\n\n#LISAAiForHR #BadgeEarned #AI #HR`;
      
      // Use LinkedIn's share URL with the badge page URL
      const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(mintedBadge.share_url)}&summary=${encodeURIComponent(postText)}`;
      window.open(linkedInUrl, '_blank');
    }
  };

  const handleDownloadBadge = async () => {
    try {
      // Get the badge element
      const badgeElement = document.querySelector('.w-72.h-96');
      if (!badgeElement) {
        console.error('Badge element not found');
        return;
      }

      // Use html2canvas to capture the badge as an image
      const canvas = await html2canvas(badgeElement, {
        backgroundColor: null,
        scale: 2, // Higher resolution
        useCORS: true,
        allowTaint: true
      });

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${mintedBadge.name.replace(/\s+/g, '_')}_badge.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 'image/png');
    } catch (error) {
      console.error('Error downloading badge:', error);
      // Fallback: try to download the placeholder image
      const link = document.createElement('a');
      link.href = mintedBadge.image_url;
      link.download = `${mintedBadge.name.replace(/\s+/g, '_')}_badge.png`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            BadgeBeam
          </h1>
          <p className="text-gray-600">
            Mint and share your workshop badges
          </p>
        </div>

        {!mintedBadge ? (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Create Your Badge
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Role/Company
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="e.g., Software Engineer at TechCorp"
                  />
                </div>

                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Image (Optional)
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload a profile picture to display on your badge
                  </p>
                </div>

                {error && (
                  <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isMinting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isMinting ? 'Minting Badge...' : 'Mint Badge'}
                </button>
              </form>
            </div>

            {/* Badge Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Live Preview
              </h3>
              <div className="flex justify-center">
                <BadgePreview 
                  name={formData.name || "Your Name"} 
                  role={formData.role}
                  image={formData.image}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Minted Badge Display */
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Your Badge is Ready!
              </h2>
              
              <div className="mb-6">
                <div className="flex justify-center">
                  <BadgePreview 
                    name={mintedBadge.name} 
                    role={mintedBadge.role}
                    image={mintedBadge.profile_image}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownloadBadge}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Badge
                </button>

                <button
                  onClick={handleLinkedInShare}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Share on LinkedIn
                </button>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => {
                    setMintedBadge(null);
                    setFormData({ name: '', role: '', image: null });
                    setError('');
                  }}
                  className="text-gray-600 hover:text-gray-800 underline"
                >
                  Create Another Badge
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
