export const fetchCitiesApi = async (search: string, count : number = 5) => {
  let query = `limit=${count*20}` + (search ? `&where='${search}'` : ``)
  const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?${query}`;
  
  const res = await (
    await fetch(url)
  ).json();

  return res.results
};
