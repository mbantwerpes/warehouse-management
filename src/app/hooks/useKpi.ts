import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import type { StudentKpi, AdminKpi } from '../../lib/types/types';

const getKpi = async (userId: string, type: string) => {
  let data = undefined;
  if (type === 'admin') {
    ({ data } = await axios.get(`/api/kpi/admin`));
  } else if (type === 'student') {
    ({ data } = await axios.get(`/api/kpi/student/${userId}`));
  }
  return data;
};

const useKpi = (
  userId: string,
  type: string
): UseQueryResult<StudentKpi | AdminKpi, Error> => {
  return useQuery<StudentKpi | AdminKpi, Error>(['kpi', userId], () =>
    getKpi(userId, type)
  );
};

export default useKpi;
