import { Todo } from '../../types/Todo';
import { TodoHelpers } from '../../types/TodoHelpers';
import { TodoItem } from '../TodoItem';

type TodoListProps = {
  filteredTodos: Todo[];
  tempTodo: Todo | null;
  loadingTodoId: number | number[] | null;
  helpers: TodoHelpers;
};

export const TodoList: React.FC<TodoListProps> = ({
  filteredTodos,
  tempTodo,
  loadingTodoId,
  helpers,
}) => {
  const isTempTodoLoading = () => tempTodo !== null && loadingTodoId === 0;

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          loadingTodoId={loadingTodoId}
          helpers={helpers}
        />
      ))}

      {tempTodo && (
        <div
          data-cy="Todo"
          className={`todo ${isTempTodoLoading() ? 'is-loading' : ''}`}
        >
          <input
            data-cy="TodoStatus"
            type="checkbox"
            className="todo__status"
            checked={tempTodo.completed}
            disabled
          />
          <span data-cy="TodoTitle" className="todo__title">
            {tempTodo.title}
          </span>
          {isTempTodoLoading() && (
            <div data-cy="TodoLoader" className="modal overlay is-active">
              <div className="modal-background has-background-white-ter" />
              <div className="loader" />
            </div>
          )}
        </div>
      )}
    </section>
  );
};
