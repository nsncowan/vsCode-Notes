```js
// src\components\job-box\buttons\ShowJobDetailsButton.tsx
import { JobBoxActionsButtonsProps } from '../../tracker/tracker.types';

const ShowJobDetailsButton = (
  props: JobBoxActionsButtonsProps
): JSX.Element => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const handleShowJob = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    dispatch(setCurrentJob({ id: id }));
    dispatch(openModal(ModalType.ShowJobDetails));
  };
  return (
    <button
      title="Copy link to share"
      className="text-xs w-fit px-2 py-1 rounded-xl text-slate-100 
           bg-sky-500 hover:bg-sky-600"
      onClick={handleShowJob}
    >
      <span>View</span>
    </button>
  );
};

export default ShowJobDetailsButton;














```