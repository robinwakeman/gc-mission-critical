import React from 'react';
import ReactKanban from 'react-kanban-dnd';

export default class Board extends React.Component {
  renderCard = row => (
    <div>
      <div>
        <h3>Name:</h3>
        {row.name}
      </div>
      <div>
        <h4>Age:</h4>
        {row.age}
      </div>
    </div>
  );

  render() {
    const columns = [
      {
        id: 'column1',
        title: 'Column 1',
        rows: [
          {
            id: 'row1',
            name: 'User one',
            age: 21,
          },
        ],
      },
      {
        id: 'column2',
        title: 'Column 2',
        rows: [
          {
            id: 'row2',
            name: 'User two',
            age: 23,
          },
          {
            id: 'row3',
            name: 'User three',
            age: 30,
          },
        ],
      },
      {
        id: 'column3',
        title: 'Column 3',
        rows: [
          {
            id: 'row4',
            name: 'User four',
            age: 25,
          },
        ],
      },
    ];

    return (
      <ReactKanban
        renderCard={this.renderCard}
        columns={columns}
      />
    );
  }
}