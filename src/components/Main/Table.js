import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleCompleteTask, removeTodoTask } from "../../redux/actions";
const TableStyled = styled.table`
  text-align: center;

  tr {
    display: grid;
    grid-template-columns: 30% 15% 20% 20% 15%;
  }
  td {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .task {
    overflow: auto;
    word-wrap: break-word;
  }
  .done {
    background: #c1ffc1 !important;
  }
  .table-striped {
    background: #777;
  }

  .fa-check-circle {
    transition: all 0.3s;
    color: green;
    &:hover {
      cursor: pointer;
      color: red;
      transform: scale(1.1);
      &:before {
        content: "\f057";
      }
    }
  }
`;

const Table = props => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const toggleCompleteTaskHandler = id => {
    dispatch(toggleCompleteTask(id));
  };

  const removeTodoTaskHandler = id => {
    dispatch(removeTodoTask(id));
  };
  return (
    <TableStyled className="table table-striped">
      <thead className="table-dark">
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Completed</th>
          <th scope="col">Created</th>
          <th scope="col">Due Date</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => {
          return (
            <tr key={todo.id} className={todo.completed ? "done" : null}>
              <td className="task">
                {todo.completed ? (
                  <span className="complete">{todo.task}</span>
                ) : (
                  <span className="task">{todo.task}</span>
                )}
              </td>
              <td>
                {todo.completed ? (
                  <i
                    onClick={e => toggleCompleteTaskHandler(todo.id)}
                    className="fas fa-check-circle"
                  />
                ) : (
                  <input
                    type="checkbox"
                    onChange={e => toggleCompleteTaskHandler(todo.id)}
                  />
                )}
              </td>

              <td className={todo.completed ? "complete" : null}>
                {todo.created ? todo.created : null}
              </td>
              <td className={todo.completed ? "complete" : null}>
                {todo.dueDate ? todo.dueDate : null}
              </td>
              <td>
                <i
                  onClick={() => removeTodoTaskHandler(todo.id)}
                  className="fas fa-trash"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableStyled>
  );
};

export default Table;
