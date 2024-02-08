import React, { ReactNode, useState  } from 'react';
import ReactModal from 'react-modal';

interface LabelModalProps {
    children: React.ReactNode;
  }

export const LabelInp = (props: LabelModalProps) => {
    const { children } = props;
    return(
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{ children }</label>
    );
}

  
 