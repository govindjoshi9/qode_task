import React from "react";
import { blogPosts } from "./Blog";

export default function HomePage ()  {


    return (

    <div className="ml-64 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Home</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Get started</h3>
          <p className="text-gray-600 text-sm">Read our getting started guide to get the most out of your Capitalmind subscription.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
          <p className="text-gray-600 text-sm">Join the conversation on our exclusive community on Slack for Capitalmind Premium subscribers</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Visit website</h3>
          <p className="text-gray-600 text-sm">Keep up with our latest content on our website</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg leading-tight">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <button className="text-teal-600 text-sm font-medium hover:text-teal-700">
                Read full post
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}