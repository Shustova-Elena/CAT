import { useGetCurrenciesQuery } from '../../../redux/api/currencies'
import { DropDownList } from '../../molecules/DropDownList'

export const SelectContainer = () => {
    const { data: dataList, isLoading } = useGetCurrenciesQuery()
    const data = dataList ? dataList.data : []

    return !isLoading && <DropDownList data={data} />
}
