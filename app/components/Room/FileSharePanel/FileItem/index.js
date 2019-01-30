/*
 * @Author: fan.li
 * @Date: 2019-01-28 17:45:12
 * @Last Modified by: fan.li
 * @Last Modified time: 2019-01-28 21:10:54
 *
 * @flow
 *
 * 文件，不同文件显示的卡片不一样
 */

import * as React from 'react';
import styles from './style.scss';

type Props = {
  fileName: string,
  fileType: string,
  fileSize: number,
  fileUrl: string,
  createTime: string | number,
  onDownloadClick?: (url: string) => void;
};

export default class FileItem extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  formatFileSize = (fileSize: number): string => {
    // fileSize 单位为B
    if (fileSize / 1024 / 1024 > 1) { // M
      return Math.round(fileSize / 1024 / 1024) + 'M'
    } else if (fileSize / 1024 > 1) { // K
      return Math.round(fileSize / 1024 > 1); + 'K';
    } else {
      return fileSize + 'B';
    }
  }

  render() {
    const { fileName, fileType, fileSize, fileUrl, createTime, onDownloadClick } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.type}>
            {fileType.toUpperCase()}
          </div>

          <div className={styles.info_item}>
            文件类型：{fileType.length > 10 ? `${fileType.substr(0, 10)}...` : fileType}
          </div>
          <div className={styles.info_item}>
            文件大小：{this.formatFileSize(fileSize)}
          </div>
        </div>

        <div className={styles.bottom}>
         <span className={styles.name}>
           {fileName.length > 20 ? `${fileName.substr(0, 20)}...` : fileName}
         </span>
         <span className={styles.link} onClick={() => onDownloadClick(fileUrl)}>下载</span>
        </div>
      </div>
    );
  }
}

FileItem.defaultProps = {
  onDownloadClick: f => f,
};
