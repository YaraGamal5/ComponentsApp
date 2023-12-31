import Table from "./Table";
import { GoArrowDown , GoArrowUp} from "react-icons/go";
import useSort from "../hooks/use-sort";



function SortableTable (props) {
    
    const {config, data} = props;
    const {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    }  = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return{
            ...column,
            header: () => (
            <th
             className="cursor-pointer hover:bg-gray-100 select-none"
             onClick={() => setSortColumn(column.label)}
              >
                <div className="flex items-center justify-center px-5 py-2">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
            ),
        }
    });


    return  <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowUp/>
            <GoArrowDown/>
        </div>
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowUp/>
            <GoArrowDown/>
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowDown/>
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <GoArrowUp/>
        </div>
    }
}

export default SortableTable;