import React, { useState } from 'react';
import { Search, Home, Hammer, TrendingUp, Users, MapPin, Calendar, DollarSign, Star, ChevronRight, Plus, Filter, X } from 'lucide-react';

const GoalMates = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedGoal, setSelectedGoal] = useState('all');
  const [showCreateListing, setShowCreateListing] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Sample listings data
  const listings = [
    {
      id: 1,
      title: "Fixer-Upper Flip Project",
      location: "Austin, TX",
      goal: "renovation",
      members: "2/4",
      investment: "$15k-20k",
      timeline: "12-18 months",
      description: "Looking for motivated partners to renovate and flip a 3BR house",
      skills: ["Plumbing", "Electrical", "Design"],
      profit: "Est. 30-40% ROI",
      image: "🏚️"
    },
    {
      id: 2,
      title: "Sustainable Living Community",
      location: "Portland, OR",
      goal: "sustainable",
      members: "3/6",
      investment: "$8k-12k",
      timeline: "Long-term",
      description: "Building an eco-friendly communal living space with gardens",
      skills: ["Gardening", "Solar Installation", "Carpentry"],
      profit: "Shared equity",
      image: "🌱"
    },
    {
      id: 3,
      title: "Urban Loft Renovation",
      location: "Chicago, IL",
      goal: "renovation",
      members: "1/3",
      investment: "$25k-30k",
      timeline: "8-10 months",
      description: "Converting industrial space into modern lofts for resale",
      skills: ["Architecture", "Interior Design", "Project Management"],
      profit: "Est. 45% ROI",
      image: "🏢"
    },
    {
      id: 4,
      title: "Creative Co-Living Space",
      location: "Brooklyn, NY",
      goal: "creative",
      members: "4/8",
      investment: "$5k-10k",
      timeline: "Ongoing",
      description: "Artist collective renovating warehouse into live/work studios",
      skills: ["Art", "Music Production", "Marketing"],
      profit: "Shared workspace",
      image: "🎨"
    }
  ];

  const goalTypes = [
    { id: 'all', label: 'All Projects', icon: '🏠' },
    { id: 'renovation', label: 'Fix & Flip', icon: '🔨' },
    { id: 'sustainable', label: 'Eco-Living', icon: '🌿' },
    { id: 'creative', label: 'Creative Spaces', icon: '🎭' },
    { id: 'investment', label: 'Investment Props', icon: '📈' }
  ];

  const filteredListings = selectedGoal === 'all' 
    ? listings 
    : listings.filter(l => l.goal === selectedGoal);

  // Ad component
  const AdBanner = ({ type }) => (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg mb-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-black/20 text-xs px-2 py-1 rounded-bl">AD</div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-lg mb-1">
            {type === 'top' ? 'Premium Tools for House Flippers' : 'Smart Home Renovation Loans'}
          </h4>
          <p className="text-sm opacity-90">
            {type === 'top' 
              ? 'Get 20% off contractor management software' 
              : 'Low rates starting at 4.9% APR'}
          </p>
        </div>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
          Learn More
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">GoalMates</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <button 
              onClick={() => setActiveTab('browse')}
              className={`font-medium ${activeTab === 'browse' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              Browse
            </button>
            <button 
              onClick={() => setActiveTab('matches')}
              className={`font-medium ${activeTab === 'matches' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              My Matches
            </button>
            <button 
              onClick={() => setShowCreateListing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>Create Listing</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Top Ad */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <AdBanner type="top" />
      </div>

      {/* Goal Filter Tabs */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Find Your Perfect Project</h2>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filters</span>
            </button>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {goalTypes.map(goal => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedGoal === goal.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{goal.icon}</span>
                <span className="font-medium">{goal.label}</span>
              </button>
            ))}
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Location</label>
                <input type="text" placeholder="City or ZIP" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Investment Range</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>Any</option>
                  <option>$0-10k</option>
                  <option>$10k-25k</option>
                  <option>$25k+</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Timeline</label>
                <select className="w-full px-3 py-2 border rounded-lg">
                  <option>Any</option>
                  <option>0-6 months</option>
                  <option>6-12 months</option>
                  <option>12+ months</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Skills Needed</label>
                <input type="text" placeholder="e.g., Plumbing" className="w-full px-3 py-2 border rounded-lg" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing, index) => (
            <React.Fragment key={listing.id}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{listing.image}</div>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{listing.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {listing.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {listing.members} members
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {listing.investment}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {listing.timeline}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{listing.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Skills Needed:</p>
                    <div className="flex flex-wrap gap-2">
                      {listing.skills.map(skill => (
                        <span key={skill} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-green-600">{listing.profit}</span>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Insert ad after every 3rd listing */}
              {(index + 1) % 3 === 0 && index < filteredListings.length - 1 && (
                <div className="md:col-span-2 lg:col-span-3">
                  <AdBanner type="middle" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Create Listing Modal */}
      {showCreateListing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Create Your Project Listing</h2>
                <button 
                  onClick={() => setShowCreateListing(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., Victorian House Renovation Project" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                  <select className="w-full px-3 py-2 border rounded-lg">
                    <option>Fix & Flip</option>
                    <option>Eco-Living</option>
                    <option>Creative Space</option>
                    <option>Investment Property</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="City, State" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Investment Required</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., $10k-15k" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                  <textarea className="w-full px-3 py-2 border rounded-lg h-24" placeholder="Describe your project goals and vision..."></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Skills Needed</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., Plumbing, Electrical, Design (comma separated)" />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowCreateListing(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => {
                      // Handle form submission here
                      alert('Listing created successfully!');
                      setShowCreateListing(false);
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Create Listing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalMates;
