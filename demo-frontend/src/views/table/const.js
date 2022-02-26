export const tableColumns = [
  {
    title: '编号',
    dataIndex: 'id',
    width: '10%',
    align: 'center',
    scopedSlots: { customRender: 'id' },
  },
  {
    title: '账号',
    dataIndex: 'accountCode',
    width: '20%',
    align: 'center',
    scopedSlots: { customRender: 'accountCode' },
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    width: '20%',
    ellipsis: true,
    align: 'center',
    scopedSlots: { customRender: 'userName' }
  },
  {
    title: '密码',
    dataIndex: 'password',
    width: '20%',
    align: 'center',
    scopedSlots: { customRender: 'password' },
  },
  {
    title: '状态',
    dataIndex: 'isDelete',
    width: '15%',
    align: 'center',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '操作',
    width: '20%',
    align: 'center',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  }
]

// 测试数据
export const tableData = [
  {
    id:'1',
    accountCode: '123456',
    userName: 'Alexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    password: '123456',
    isDelete: 1
  },{
    id:'2',
    accountCode: '456789',
    userName: 'Bob',
    password: '456789',
    isDelete: 0
  }
]