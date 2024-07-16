import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const GroupDetails = () => {
    const { id } = useParams();
    const [group, setGroup] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchGroup = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/groups/${id}/`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setGroup(data);
        } catch (error) {
          console.error('Error fetching group:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchGroup();
    }, [id]);
  
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!group) {
      return <div>No group data available.</div>;
    }
  
    return (
      <div className="container mx-auto p-24">
        <h1 className="text-3xl font-bold mb-4">{group.name}</h1>
        <p className="text-xl mb-4"><strong>Category:</strong> {group.category?.name || 'N/A'}</p>
        <p className="mb-4">{group.description}</p>
        <p className="mb-4"><strong>User Limit:</strong> {group.user_limit || 'N/A'}</p>
        <p className="mb-4"><strong>Users:</strong> {group.users?.length || 'N/A'}</p>
        <p className="mb-4"><strong>Created At:</strong> {group.created_at ? new Date(group.created_at).toLocaleDateString() : 'N/A'}</p>
        <p className="mb-4"><strong>Updated At:</strong> {group.updated_at ? new Date(group.updated_at).toLocaleDateString() : 'N/A'}</p>
      </div>
    );
}