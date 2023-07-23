```js
    const ref = collection(db, "schedules");
    const q = query(ref, where("date", "==", currentDay));

    const findSchedule = 
        onSnapshot(q,(snapshot) => {
          const scheduleToDisplay = [];
          snapshot.docs.forEach((doc) => {
            scheduleToDisplay.push({
              id: doc.id,
              date: doc.data().date,
              items: doc.data().items,
            });
          });
          console.log("scheduleToDisplay : ", scheduleToDisplay);
          setScheduleToDisplay(scheduleToDisplay);

          const items = scheduleToDisplay.map((entry) => {
            return entry.items;
          });
          const scheduleItems = [];
          items.forEach((item) => {
            scheduleItems.push(item);
          });
          setScheduleItems(scheduleItems.flat(2));
          console.log('scheduleItems: ', scheduleItems);
        },
        // (error) => {}
      );
```
```js
// SCHEDULE
  return (
    <React.Fragment>
      <h2>{currentDay}</h2>
      <button onClick={handleAddScheduleButtonClick}>addSchedule0</button>
      <button onClick={handleAddItemToScheduleButtonClick}>addItemToSchedule</button>
      {scheduleToDisplay?.map((entry, index) =>
        <div>
          <h2>{entry.date}</h2>
          <Droppable droppableId='schedule' key='schedule'>
            {(provided, snapshot) => (
              <StyledScheduleDiv ref={provided.innerRef} {...provided.droppableProps} style={{background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",}}>
                {entry.items.map((timeSlot, index) =>
                  <TimeSlot time={timeSlot.time} name={timeSlot.name} category={timeSlot.category} id={timeSlot.id} key={timeSlot.id} index={index}/>
                )}
                {provided.placeholder}
              </StyledScheduleDiv>
            )}
          </Droppable>
        </div>
      )}
    </React.Fragment>
  );
```
```js
// ALT_SCHEDULE
  return (
    <React.Fragment>
      <h2>{currentDay}</h2>
      <button onClick={handleAddScheduleButtonClick}>addSchedule0</button>
      <button onClick={handleAddItemToScheduleButtonClick}>addItemToSchedule</button>
        {/* <h2>{scheduleToDisplay.date}</h2> */}
        <Droppable droppableId='schedule' key='schedule'>
          {(provided, snapshot) => (
            <StyledScheduleDiv ref={provided.innerRef} {...provided.droppableProps} style={{background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",}}>
              {scheduleItems.map((timeSlot, index) =>
                <TimeSlot time={timeSlot.time} name={timeSlot.name} category={timeSlot.category} id={timeSlot.id} key={timeSlot.id} index={index} v4={v4()}/>
              )}
              {provided.placeholder}
            </StyledScheduleDiv>
          )}
        </Droppable>
    </React.Fragment>
  );

```