
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-50">
          Welcome to TapeGossip
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Essays and ideas at the intersection of technology, society, and human coordination.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/essays">
            <Button className="text-lg px-6 py-3">
              Read Essays
            </Button>
          </Link>
          <Link to="/library">
            <Button className="text-lg px-6 py-3" variant="outline">
              Browse Library
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
