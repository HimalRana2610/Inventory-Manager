import { Box, Button, CloseButton, Dialog, Heading, HStack, IconButton, Image, Input, Portal, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { useColorModeValue } from './ui/color-mode'
import { useProductStore } from '@/store/product'
import { toaster } from '@/components/ui/toaster'

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        closable: true
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        closable: true
      });
    }
  }

  const [updatedProduct, setUpdatedProduct] = useState(product);
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        closable: true
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        closable: true
      });
    }
  }

  return (
    <Box shadow={"lg"} rounded={"lg"} overflow={"hidden"} transition={"all 0.3s"} _hover={{ transform: "translateY(-5px)", shadow: "xl" }} w={"full"} bg={bg}>
      <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"} />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>{product.name}</Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>${product.price}</Text>
        <HStack gap={2}>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <IconButton colorScheme={"blue"}><FiEdit /></IconButton>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Update Product</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <VStack>
                      <Input placeholder='Product Name' name='name' value={updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} />
                      <Input placeholder='Price' name='price' type='number' value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} />
                      <Input placeholder='Image URL' name='image' value={updatedProduct.image} onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })} />
                    </VStack>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button colorScheme={'blue'} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
                    </Dialog.ActionTrigger>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger>
                    <CloseButton size={"sm"} />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
          <IconButton colorScheme={"red"} onClick={() => handleDeleteProduct(product._id)}><RiDeleteBin5Fill /></IconButton>
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductCard