export default  {
  appBar: {
    currentSelected : 'Dashboard',
    dropdown : {
      dropped : false,
      tab : ''
    },
    tabs : ['Dashboard', 'Input', 'View', 'Admin'],
    options: {
      Dashboard: {
        toLink : '/dashboard',
        itemsList: []
      },
      Input : {
        toLink : '/dataInput',
        itemsList: []
      },
      View : {
        toLink : '/dataView',
        itemsList : [
          {
            displayName: 'Weekly',
            toLink: '/dataView/Weekly'
          },{
            displayName: 'RAW',
            toLink: '/dataView/RAW',
          },{
            displayName: 'Compare',
            toLink: '/dataView/Compare'
          },{
            displayName: 'Spec',
            toLink: '/dataView/Spec'
          },{
            displayName: 'Scenario',
            toLink: './dataView/Scenraio'
          }
        ]
      },
      Admin: {
        toLink : '/Admin',
        itemsList: [
          {
            displayName: 'Specification',
            toLink: '/Admin/Specification'
          },{
            displayName: 'TCID',
            toLink: 'Admin/TCID'
          },{
            displayName: 'Scenario',
            toLink: 'Admin/Scenario'
          },{
            displayName: 'Spec',
            toLink: 'Admin/Spec'
          }
        ]
      }
    }
  }
};
