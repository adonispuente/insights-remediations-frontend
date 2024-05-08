import React from 'react';
import IssuesColumn from './IssuesColumn';
import RebootColumn from './RebootColumn';
import ConnectionStatusColumn from './ConnectionStatusCol';

export default [
  {
    key: 'display_name',
  },
  {
    key: 'tags',
  },
  {
    key: 'system_profile',
  },
  {
    key: 'issues',
    title: 'Issues',
    // eslint-disable-next-line react/display-name
    renderFunc: (issues, _, { display_name }) => (
      <IssuesColumn issues={issues} display_name={display_name} />
    ),
    props: {
      width: 15,
      isStatic: true,
    },
  },
  {
    key: 'rebootRequired',
    title: 'Reboot required',
    // eslint-disable-next-line react/display-name
    renderFunc: (rebootRequired) => (
      <RebootColumn rebootRequired={rebootRequired} />
    ),
    props: {
      width: 15,
      isStatic: true,
    },
  },
  {
    key: 'connection_status',
    title: 'Connected Status',
    // eslint-disable-next-line react/display-name
    renderFunc: (connection_status) => (
      <ConnectionStatusColumn connection_status={connection_status} />
    ),
    props: {
      width: 15,
      isStatic: true,
    },
  },
];
