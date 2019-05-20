import React from 'react'
import { Card, Form, Button, Input, DatePicker, message, Select } from 'antd'
import moment from 'moment'
import Http from '../../Http'

const FormItem = Form.Item
const Option = Select.Option

class ProductIntoStock extends React.Component {

    state = {}

    handleSubmit = async () => {
        let userInfo = this.props.form.getFieldsValue();
        console.log('1234', userInfo)
        const json = await Http.post({
            url: '/product/add',
            params: userInfo
        })
        console.log(json)
        // console.log(JSON.stringify(userInfo))
        if(json.code === 0) {
            message.success('保存成功')
            this.props.form.resetFields()
        }
    }

    reset = () => {
        this.props.form.resetFields();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
      
        return (
            <div>
                <Card>
                    <Form layout="horizontal">
                        <FormItem label="商品编号" {...formItemLayout}>
                            {
                                getFieldDecorator('productid', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '商品编号不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入商品编号" />
                                )
                            }
                        </FormItem>
                        <FormItem label="商品名称" {...formItemLayout}>
                            {
                                getFieldDecorator('productname', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '商品名称不能为空'
                                        }
                                    ]
                                })(
                                    <Input type="text" placeholder="请输入商品名称" />
                                )
                            }
                        </FormItem>
                        <FormItem label="规格" {...formItemLayout}>
                            {
                                getFieldDecorator('unit', {
                                    initialValue: '1000g',
                                    rules: [
                                        {
                                            required: true,
                                            message: '商品规格不能为空'
                                        }
                                    ]
                                })(
                                    <Input type="text" placeholder="请输入规格" />
                                )
                            }
                        </FormItem>
                        <FormItem label="进价" {...formItemLayout}>
                            {
                                getFieldDecorator('incomeprice', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '进价不能为空'
                                        }
                                    ]
                                })(
                                    <Input type="text" placeholder="请输入进价" />
                                )
                            }
                        </FormItem>

                        <FormItem label="售价" {...formItemLayout}>
                            {
                                getFieldDecorator('sellprice', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '售价不能为空'
                                        }
                                    ]
                                })(
                                    <Input type="number" placeholder="请输入售价" />
                                )
                            }
                        </FormItem>
                       
                        <FormItem label="商品类型" {...formItemLayout}>
                            {
                                getFieldDecorator('producttype', {
                                    initialValue: '水果'
                                })(
                                    <Select>
                                        <Option value={'水果'}>水果</Option>
                                        <Option value={'蔬菜'}>蔬菜</Option>
                                        <Option value={'海鲜'}>海鲜</Option>
                                        <Option value={'饮料'}>饮料</Option>
                                    </Select>
                                )
                            }
                        </FormItem>

                        <FormItem label="数量" {...formItemLayout}>
                            {
                                getFieldDecorator('productcount', {
                                    initialValue: '1'
                                })(
                                    <Input type="number" placeholder="请输入数量" />
                                )
                            }
                        </FormItem>
                        <FormItem label="储位" {...formItemLayout}>
                            {
                                getFieldDecorator('productloc', {
                                    initialValue: 'L-'
                                })(
                                    <Input type="text" placeholder="请输入储位地址" />
                                )
                            }
                        </FormItem>

                        <FormItem label="有效期至" {...formItemLayout}>
                            {
                                getFieldDecorator('userfuldate', {
                                    initialValue: moment()
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:MM"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="商品图片" {...formItemLayout}>
                            {
                                getFieldDecorator('img', {
                                    initialValue: ''
                                })(
                                    <Input type="file" placeholder="请上传商品图片" />
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.reset}>取消</Button>
                            <Button type="primary" onClick={this.handleSubmit}>保存</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(ProductIntoStock)