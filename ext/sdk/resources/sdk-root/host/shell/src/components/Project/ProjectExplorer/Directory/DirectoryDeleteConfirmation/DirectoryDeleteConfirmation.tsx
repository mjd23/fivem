import React from 'react';
import { ProjectContext } from '../../../../../contexts/ProjectContext';
import { Button } from '../../../../controls/Button/Button';
import { Explorer, getRelativePath } from '../../../../Explorer/Explorer';
import { Modal } from '../../../../Modal/Modal';

export interface DirectoryDeleteConfirmationProps {
  path: string,
  onClose: () => void,
  onDelete: () => void,
}

export const DirectoryDeleteConfirmation = React.memo(({ path, onClose, onDelete }: DirectoryDeleteConfirmationProps) => {
  const { project } = React.useContext(ProjectContext);
  const directoryRelativePath = getRelativePath(project?.path || '', path);

  return (
    <Modal onClose={onClose}>
      <div className="modal-header">
        Delete directory "{directoryRelativePath}"?
      </div>

      <div className="modal-label">
        Directory has following structure:
      </div>

      <Explorer
        basePath={path}
        pathsMap={project?.fsTree.pathsMap}
      />

      <div className="modal-actions">
        <Button
          text="Delete directory"
          onClick={onDelete}
          tabIndex={1}
        />
        <Button
          theme="primary"
          text="Cancel"
          onClick={onClose}
          autofocus
          tabIndex={0}
        />
      </div>
    </Modal>
  );
});
