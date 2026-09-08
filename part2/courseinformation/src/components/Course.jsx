const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

const Header = ({ header }) => <h1>{header}</h1>;

const Content = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);

  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />

      <Total total={total} />
    </div>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ total }) => (
  <p>
    <strong>total of {total} exercises </strong>
  </p>
);
export default Course;
