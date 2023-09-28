import { useGetCurrenciesQuery } from '../../../redux/api/currencies'
import { Loader } from '../../atoms/Loader'
import { DropDownList } from '../../molecules/DropDownList'

export const SelectContainer = () => {
    const { data: dataList, isLoading } = useGetCurrenciesQuery()
    const data = dataList ? dataList.data : []

    return isLoading ? <Loader /> : <DropDownList data={data} />
}
