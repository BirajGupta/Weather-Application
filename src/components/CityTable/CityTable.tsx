import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TableContainerComp } from './styled';
import { cityData } from '@/src/api/types';
import { setIsLoading, setCities } from '../../store/reducers/appReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import InfiniteScrollObserver from '../../hooks/infiniteScrollObserver';
import { fetchCitiesApi } from '../../api/placeSuggestion';
import { Link, useNavigate } from 'react-router-dom';


const TableContainer: React.FC = () => {

  const scrollRef = useRef(null)
  const navigate = useNavigate()
  const [data, setData] = useState<any[]>([])
  const [noMoreDataFlag, setNoMoreDataFlag] = useState(false)
  const [countMultiplier, setCountMultiplier] = useState<number>(0)

  const { loading, cities } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
    cities: state.app.cities,
  }));
  const dispatch = useDispatch();


  const fetchCities = async () => {
    try {
      // const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${countMultiplier*20}`
      dispatch(setIsLoading(true))

      const res = await fetchCitiesApi('', countMultiplier)

      if(res && res?.length) setData(res)
      else setNoMoreDataFlag(true)

      dispatch(setIsLoading(false))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(countMultiplier > 0) fetchCities()
  }, [countMultiplier])

  useEffect(() => {
    if (!loading && data?.length > 0) {
      dispatch(setCities([...data]));
    }
  }, [data, loading]);

  const handleNavigate = (city : string) => {
    navigate('/weatherInfo', {state : city})
  }
  
  return (
    <TableContainerComp id='subList'>
      <table>
      <thead>
        <th>City</th>
        <th>Country</th>
        <th>Timezone</th>
      </thead>
      <tbody>
        {
          cities && cities.length ? cities.map((data,i) => {
            return <tr onClick={() => handleNavigate(data?.name)}>
              <td>{data?.name}</td>
              <td>{data.cou_name_en}</td>
              <td>{data.timezone}</td>
            </tr>
          })
          :
          null
        }
      </tbody>
      </table>
      {noMoreDataFlag ? <p>No more data available</p> : null}
      
      <div ref={scrollRef}></div>
      <InfiniteScrollObserver
        referencedVariable={scrollRef}
        fetchData={() => setCountMultiplier(count => count + 1)}
        targetId={'#subList'}
      />
    </TableContainerComp>
  );
};

export default TableContainer;
