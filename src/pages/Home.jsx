import { useEffect, useState } from "react";
import { ERROR_NOTIFICATION } from "../helper/notification_helper";
import { GET_ALL_RECIPES } from "../helper/api_helper";
import _ from "lodash";
import { Form, Input, Modal, Select, Table, Tag } from "antd";
import { GET_ALL_COLORS } from "../helper/function_helper";
import { useSelector, useDispatch } from "react-redux";
import { ICON_HELPER } from "../helper/icon_helper";
import { FAVORITE_DETAILS } from "../redux/favorite_slice";
import { FOOD_LEVEL_DATA } from "../helper/data_helper";

const Home = () => {
  const [recipes, setAllRecipes] = useState([]);
  const [currentData, setCurrentData] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [foodType, setFoodType] = useState("");

  // shuffle redux
  let value = useSelector((data) => data?.shuffle_triger?.value);
  // favorite redux
  let favorite = useSelector((data) => data?.favorite_slice?.value);

  let dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await GET_ALL_RECIPES();
      let filter_data = _.get(result, "data", []);
      if (search) {
        filter_data = filter_data.filter((res) => {
          return res.title
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        });
      }

      if (foodType) {
        filter_data = filter_data.filter((res) => {
          return res.difficulty === foodType;
        });
      }

      setAllRecipes(_.shuffle(filter_data));
    } catch {
      ERROR_NOTIFICATION("Something Went Wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [value, search, foodType]);

  const handleClick = (id) => {
    try {
      if (!favorite.includes(id)) {
        dispatch(FAVORITE_DETAILS([...favorite, id]));
      } else {
        let restRecipes = favorite?.filter((res) => {
          return res !== id;
        });
        dispatch(FAVORITE_DETAILS(restRecipes));
      }
    } catch {
      ERROR_NOTIFICATION("something went wrong!");
    }
  };

  const handleSearch = (value) => {
    setSearch(value?.target?.value);
  };

  const columns = [
    {
      title: "S.No",
      render: (single, all, index) => {
        return index + 1;
      },
    },
    {
      title: "Food Type",
      dataIndex: "food_type",
      render: (data) => {
        return (
          <div
            className={`!font-medium  ${
              data === "veg" ? "!text-green-500" : "!text-orange-500"
            }   !capitalize  !h-[30px]`}
          >
            {data}
          </div>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "title",
    },
    {
      title: "Time-To-Eat",
      dataIndex: "timeToEat",
    },
    {
      title: "Cooking Time",
      dataIndex: "cookingTime",
    },
    {
      title: "Difficulty Level",
      dataIndex: "difficulty",
      render: (data) => {
        return <div className={`${GET_ALL_COLORS(data)}`}>{data}</div>;
      },
    },
    {
      title: "Ingredients",
      dataIndex: "ingredients",
      render: (data) => {
        return (
          <div>
            {data.map((res, index) => {
              return (
                <Tag className="!bg-slate-200" key={index}>
                  {res}
                </Tag>
              );
            })}
          </div>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (data) => {
        return (
          <div
            onClick={() => {
              setCurrentData(data);
            }}
          >
            {data.slice(0, 50)}...{" "}
            <span className="!font-medium !text-orange-500 cursor-pointer">
              Read More
            </span>
          </div>
        );
      },
    },
    {
      title: "Favorite",
      dataIndex: "id",
      render: (data) => {
        return (
          <div>
            {favorite.includes(data) ? (
              <ICON_HELPER.FAVORITE_FILL_ICON
                onClick={() => {
                  handleClick(data);
                }}
                className="!text-lg !cursor-pointer !text-red-500"
              />
            ) : (
              <ICON_HELPER.FAVORITE_OUTLINE_ICON
                onClick={() => {
                  handleClick(data);
                }}
                className="!text-lg !cursor-pointer"
              />
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div className="py-20 w-full">
      <div className="!mb-5 center_div gap-x-4 !justify-start">
        <Form layout="vertical" className="center_div gap-x-4">
          <Form.Item label="Search Recipes">
            <Input
              className="antd_input"
              placeholder="Search..."
              onChange={(e) => {
                handleSearch(e);
              }}
            />
          </Form.Item>
          <Form.Item label="Food Type">
            <Select
              className="antd_input"
              allowClear
              onChange={(e) => {
                setFoodType(e);
              }}
            >
              {FOOD_LEVEL_DATA.map((res) => {
                return <Select.Option key={res.name}>{res.name}</Select.Option>;
              })}
            </Select>
          </Form.Item>
        </Form>
      </div>
      <Table
        columns={columns}
        loading={loading}
        dataSource={recipes}
        pagination={{ pageSize: 5 }}
      />
      <Modal
        open={currentData}
        onCancel={() => {
          setCurrentData("");
        }}
        footer={false}
        title={"More Description"}
      >
        <h1>{currentData}</h1>
      </Modal>
    </div>
  );
};

export default Home;
