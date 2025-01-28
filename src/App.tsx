import React, { useState } from 'react';
import { Package, Info, ArrowLeft, Plus, MapPin, Clock } from 'lucide-react';

interface DeliveryItem {
  id: number;
  name: string;
  status: string;
  destination: string;
  availability: string;
}

function App() {
  const [selectedItem, setSelectedItem] = useState<DeliveryItem | null>(null);
  const [isDetailPage, setIsDetailPage] = useState(false);

  const deliveryItems: DeliveryItem[] = [
    {
      id: 1,
      name: "Electronics Package",
      status: "In Transit",
      destination: "123 Tech Street, Silicon Valley",
      availability: "Next Day Delivery"
    },
    {
      id: 2,
      name: "Fashion Items",
      status: "Out for Delivery",
      destination: "456 Fashion Ave, New York",
      availability: "Same Day Delivery"
    },
    {
      id: 3,
      name: "Books Bundle",
      status: "Processing",
      destination: "789 Library Road, Boston",
      availability: "2-3 Business Days"
    },
    {
      id: 4,
      name: "Home Decor",
      status: "Delivered",
      destination: "321 Home Street, Chicago",
      availability: "Standard Shipping"
    }
  ];

  const handleDetails = (item: DeliveryItem) => {
    setSelectedItem(item);
    setIsDetailPage(true);
  };

  const handleBack = () => {
    setIsDetailPage(false);
    setSelectedItem(null);
  };

  const handleAddItem = () => {
    alert('Item added to cart!');
  };

  const DetailPage = ({ item }: { item: DeliveryItem }) => (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={handleBack}
        className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to List</span>
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-indigo-600 p-6 text-white">
          <h2 className="text-3xl font-bold">{item.name}</h2>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
            item.status === 'Delivered' ? 'bg-green-500' :
            item.status === 'In Transit' ? 'bg-blue-500' :
            item.status === 'Processing' ? 'bg-yellow-500' :
            'bg-purple-500'
          }`}>
            {item.status}
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-start space-x-3">
            <MapPin className="h-6 w-6 text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Delivery Location</h3>
              <p className="text-gray-600">{item.destination}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="h-6 w-6 text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Availability</h3>
              <p className="text-gray-600">{item.availability}</p>
            </div>
          </div>

          <button
            onClick={handleAddItem}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add Item</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6" />
            <span className="text-xl font-bold">e-Delivery</span>
          </div>
          <div className="text-lg font-semibold">Welcome</div>
        </div>
      </nav>

      {isDetailPage && selectedItem ? (
        <DetailPage item={selectedItem} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Delivery Items</h2>
          
          <div className="grid gap-4">
            {deliveryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 mt-1">Status: 
                      <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                        item.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        item.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        item.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {item.status}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => handleDetails(item)}
                    className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    <Info className="h-4 w-4" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;