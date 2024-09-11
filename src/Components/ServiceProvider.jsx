import React, { createContext, useContext, useState, useEffect } from "react";

const ServicesContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [healthServices, setHealthServices] = useState([]);
  const [testsData, setTestsData] = useState([]);
  const [diseasesData, setDiseasesData] = useState([]);

  const fetchHealthServices = async () => {
    const healthUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/home/health';
    const token = localStorage.getItem('bearer_token');
    
    try {
      // Check cache first
      const cachedHealthServices = sessionStorage.getItem('healthServices');
      if (cachedHealthServices) {
        setHealthServices(JSON.parse(cachedHealthServices));
        return;
      }

      const response = await fetch(healthUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const data = await response.json();
    
      if (data && data.data && Array.isArray(data.data.data)) {
        const transformedHealthServices = data.data.data.map(service => ({
          id: service.id,
          dateCreated: service.created_at,
          name: service.name,
          servicesImage: service.servicesImage,
          highlights: service.highlights,
          texts: service.texts
        }));
        
        setHealthServices(transformedHealthServices);
        sessionStorage.setItem('healthServices', JSON.stringify(transformedHealthServices));  // Cache the data
      } else {
        console.error('Unexpected health services data format:', data);
      }
    } catch (error) {
      console.error('Error fetching health services data:', error);
    }
  };

  const fetchTestsData = async () => {
    const testsUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/home/tests';
    const token = localStorage.getItem('bearer_token');
    
    try {
      // Check cache first
      const cachedTestsData = sessionStorage.getItem('testsData');
      if (cachedTestsData) {
        setTestsData(JSON.parse(cachedTestsData));
        return;
      }

      const response = await fetch(testsUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const data = await response.json();
    
      if (data && data.data && Array.isArray(data.data)) {
        const transformedTests = data.data.map(test => ({
          id: test.id,
          dateCreated: test.created_at,
          name: test.name,
          overview: test.overview,
          why: test.why,
          preparation: test.preparation,
          expectation: test.expectation,
          result: test.result,
          limitation: test.limitation,
        }));
        
        setTestsData(transformedTests);
        sessionStorage.setItem('testsData', JSON.stringify(transformedTests));  // Cache the data
      } else {
        console.error('Unexpected tests data format:', data);
      }
    } catch (error) {
      console.error('Error fetching tests data:', error);
    }
  };

  const fetchDiseasesData = async () => {
    const diseasesUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/home/disease';
    const token = localStorage.getItem('bearer_token');
    
    try {
      // Check cache first
      const cachedDiseasesData = sessionStorage.getItem('diseasesData');
      if (cachedDiseasesData) {
        setDiseasesData(JSON.parse(cachedDiseasesData));
        return;
      }

      const response = await fetch(diseasesUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const data = await response.json();
    
      if (data && data.data && Array.isArray(data.data)) {
        const transformedDiseases = data.data.map(disease => ({
          id: disease.id,
          dateCreated: disease.created_at,
          name: disease.name,
          overviewText: disease.overviewText,
          description: disease.description,
          symptoms: disease.symptoms,
          treatment: disease.treatment,
          images: disease.images,
        }));
        
        setDiseasesData(transformedDiseases);
        sessionStorage.setItem('diseasesData', JSON.stringify(transformedDiseases));  // Cache the data
      } else {
        console.error('Unexpected diseases data format:', data);
      }
    } catch (error) {
      console.error('Error fetching diseases data:', error);
    }
  };

  useEffect(() => {
    fetchHealthServices();
    fetchTestsData();
    fetchDiseasesData();
  }, []);

  const contextValue = {
    healthServices,
    diseasesData,
    testsData
  };

  return (
    <ServicesContext.Provider value={contextValue}>
      {children}
    </ServicesContext.Provider>
  );
};

// Custom hooks to use context values
export const useHealthServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useHealthServices must be used within a ServiceProvider");
  }
  return context.healthServices;
};

export const useDiseaseData = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useDiseaseData must be used within a ServiceProvider");
  }
  return context.diseasesData;
};

export const useTestsData = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useTestsData must be used within a ServiceProvider");
  }
  return context.testsData;
};

// Corrected hook for diseases data
export const useDiseasesData = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useDiseasesData must be used within a ServiceProvider");
  }
  return context.diseasesData;
};