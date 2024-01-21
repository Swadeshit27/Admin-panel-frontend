/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import { Box } from "@mui/material";

const getRandomDate = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTime);
};

const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?inc=name,id,gender,city,picture,email,phone&results=25"
        );

        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row, rowIndex) => `#000${rowIndex + 1}`,
        header: "Id",
        size: 150,
      },
      {
        accessorFn: (row) => `${row.name.first} ${row.name.last}`,
        id: "name",
        header: "Name",
        size: 250,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              alt="avatar"
              height={30}
              src={row.original.picture.thumbnail}
              loading="lazy"
              style={{ borderRadius: "50%" }}
            />
            <span>{renderedCellValue}</span>
          </Box>
        ),
      },
      {
        accessorKey: "email",
        enableClickToCopy: true,
        filterVariant: "autocomplete",
        header: "Email",
        size: 300,
      },
      {
        accessorKey: "phone",
        enableClickToCopy: true,
        filterVariant: "autocomplete",
        header: "phone number",
        size: 300,
      },
      {
        accessorKey: "citystate",
        header: "city & state",
        size: 350,
      },
      {
        accessorFn: () => getRandomDate("2022-01-01", "2023-01-01"),
        id: "startDate",
        header: "Start Date",
        filterVariant: "date",
        Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
        Header: ({ column }) => <em>{column.columnDef.header}</em>,
        muiFilterTextFieldProps: {
          sx: {
            minWidth: "250px",
          },
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, 
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    //enableRowActions: true,
    enableRowSelection: true,
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "secondary",
      rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
      variant: "outlined",
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
