Page({
  data: {
    show: false,
    list: []
  },
  onLoad () {
    const list = []
    list.length = 100
    list.fill('文本')
    this.setData({list: list})
  },
  showPopup () {
    this.setData({show: true});
  },
  onClose () {
    this.setData({show: false});
  }
})
