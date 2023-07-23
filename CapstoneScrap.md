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
          console.log("displayCurrentSchedule : ", scheduleToDisplay);
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