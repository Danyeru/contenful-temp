import { createClient } from 'contentful';
import { useEffect } from 'react';
import { useState } from 'react';

const client = createClient({
  space: '5ulnjmlq4ntf',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

const dataArrange = (response) =>
  response?.items?.reduce((acc, item) => {
    const obj = {};
    obj.image = item?.fields?.image?.fields?.file?.url;
    obj.title = item.fields.title;
    obj.url = item.fields.url;
    obj.id = item.sys.id;

    acc.push(obj);
    return acc;
  }, []);

const useFetchProjectsData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries();
      setProjects(dataArrange(response));
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, isLoading };
};

export default useFetchProjectsData;
