import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Bell, Target, Users, TrendingUp } from 'lucide-react';
import AdminLayout from '../../components/Admin/Layout';

const Marketing = () => {
  const [selectedTab, setSelectedTab] = useState('campaigns');

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2025',
      status: 'Active',
      reach: '15.2K',
      engagement: '24%',
      budget: '$1,200',
      startDate: '2025-06-01',
      endDate: '2025-06-30'
    },
    {
      id: 2,
      name: 'New Collection Launch',
      status: 'Scheduled',
      reach: '10K',
      engagement: '18%',
      budget: '$800',
      startDate: '2025-07-01',
      endDate: '2025-07-15'
    }
  ];

  const channelStats = [
    {
      icon: Mail,
      name: 'Email Marketing',
      subscribers: '12.5K',
      engagement: '22%',
      growth: '+15%'
    },
    {
      icon: Bell,
      name: 'Push Notifications',
      subscribers: '8.2K',
      engagement: '15%',
      growth: '+8%'
    },
    {
      icon: Users,
      name: 'Social Media',
      subscribers: '25K',
      engagement: '28%',
      growth: '+25%'
    }
  ];

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Marketing</h1>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Create Campaign
          </button>
        </div>

        {/* Marketing Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channelStats.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <channel.icon size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{channel.name}</h3>
                  <p className="text-sm text-gray-500">{channel.subscribers} Subscribers</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-gray-500">Engagement: </span>
                  <span className="font-medium text-gray-800">{channel.engagement}</span>
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {channel.growth}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Campaigns Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Campaign Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Reach</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Engagement</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Budget</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {campaigns.map((campaign) => (
                  <motion.tr
                    key={campaign.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Target className="text-orange-500 mr-2" size={20} />
                        <span className="text-sm font-medium text-gray-800">{campaign.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{campaign.reach}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{campaign.engagement}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{campaign.budget}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {campaign.startDate} - {campaign.endDate}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create Campaign Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
            <TrendingUp size={20} />
            Launch New Campaign
          </button>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
};

export default Marketing;
