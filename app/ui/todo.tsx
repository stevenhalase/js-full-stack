export function Todo({
  complete,
  description
}: {
  complete: boolean,
  description: string
}) {
  return (
  <div className="">
    <div className="">
      <div className="">
        <input id="complete" aria-describedby="todo-description" name="complete" type="checkbox" className="" />
      </div>
    </div>
    <label id="todo-description" className="">{ description }</label>
  </div>
  );
}
